const User = require('../models/user');
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const bcrypt = require('bcrypt');
const makeid = require('../util/makeid.js');
require("dotenv").config();

const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
  );

exports.register = (req, res, next) => {
    try {
        if(req.body.email && req.body.password) {
            let email = req.body.email;
            User.findOne({email})
                .then(async (response) => {
                    if(!response) {
                        let password = await bcrypt.hash(req.body.password, 5);
                        const activatorToken = makeid(32);

                        var user = new User();
                        user.email = email;
                        user.password = password;
                        user.activatorToken = activatorToken;

                        user.save()
                            .then((response2) => {

                                transport.sendMail({
                                    from: 'tamas.robert1@students.jedlik.eu',
                                    to: email,
                                    subject: 'Webshop - Felhasználó aktiválása',
                                    html: '<h3>Felhasználói fiókod aktiválása</h3><br><p>Kattints a linkre a jelszó az aktiváláshoz: http://localhost:8080/activate/' + activatorToken + ' </p>'
                                });

                                return res.send(response2);
                            })
                            .catch((error) => {
                                return res.send(error);
                            })
                    } else {
                        res.statusMessage = "Foglalt felhasználónév!";
                        return res.sendStatus(400).end();
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            res.statusMessage = "Hiba! nincsenek feldolgozható adatok!";
            return res.sendStatus(400).end();
        }
    } catch(e) {
        res.statusCode(500);
    }
};

exports.verifyRegistration = (req, res, next) => {
    try {
        if(req.params.token) {
            let token = req.params.token;
            User.findOne({'activatorToken': token})
                .then(async (response) => {
                    if(response) {
                        User.updateOne({'activatorToken': token}, {$unset: {'activatorToken':""}})
                            .then(() => {
                                return res.send("A felhasználói fiók sikeresen aktiválva!");
                            })
                            .catch((error) => {
                                return res.send(error);
                            })
                    } else {
                        res.statusMessage = "Hiba: Már aktivált felhasználó, vagy érvénytelen token.";
                        return res.sendStatus(400).end();
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            res.statusMessage = "Hiba: Nincs aktiválási token!";
            return res.sendStatus(400).end();
        }
    } catch(e) {
        res.statusCode(500);
    }
};
