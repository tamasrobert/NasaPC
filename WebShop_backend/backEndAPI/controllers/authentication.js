const User = require('../models/user');
const Product = require('../models/product');
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const bcrypt = require('bcrypt');
const makeid = require('../util/makeid.js');
require("dotenv").config();

const transport = nodemailer.createTransport(nodemailerSendgrid({ apiKey: process.env.SENDGRID_API_KEY }));

exports.register = (req, res) => {
    try {
        if (req.body.email && req.body.password) {

            let email = req.body.email;

            User.findOne({ email })
                .then(async (response) => {

                    if (!response) {

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
    } catch (e) {
        res.statusCode(500);
    }
};

exports.verifyRegistration = (req, res) => {
    try {
        if (req.params.token) {

            let token = req.params.token;

            User.findOne({ 'activatorToken': token })
                .then(async (response) => {

                    if (response) {

                        User.updateOne({ 'activatorToken': token }, { $unset: { 'activatorToken': "" } })
                            .then((result) => {
                                return res.send({ "Siker": "A felhasználói fiók sikeresen aktiválva!" });
                            })
                            .catch((error) => { return res.send(error) })

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
    } catch (e) {
        res.statusCode(500);
    }
};

exports.getSession = (req, res) => {
    const session = req.cookies['LOCAL_KEY'];
    if (!session) {
        res.statusMessage = "No session key found";
        return res.sendStatus(401);
    }
    User.findOne({ session })
        .then((response) => {
            if (!response) {
                res.statusMessage = "No session key found";
                return res.sendStatus(401);
            }
            res.statusMessage = "Sikeres hitelesítés";
            var data = {
                email: response.email
            }
            if (response.admin) {
                data = [{ ...data, admin: true }];
            } else {
                data = [{ ...data, admin: false }];
            }
            return res.send({ ...data })
        })
        .catch(() => {

        })
}

exports.login = (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            let email = req.body.email;

            User.findOne({ email })
                .then(async (response) => {

                    if (response) {

                        if (response.activatorToken) {
                            res.statusMessage = "A fiók nincsen aktiválva!";
                            return res.sendStatus(400).end();
                        }

                        const user = await bcrypt.compare(req.body.password, response.password);
                        if (user) {
                            const session = makeid(32);
                            res.cookie('LOCAL_KEY', session);
                            User.updateOne({ email }, { $set: { session } })
                                .then(() => { })
                                .catch((error) => {
                                    console.log(error);
                                })

                            res.statusMessage = "Sikeres bejelentkezés";
                            var data = {
                                email: response.email
                            }
                            if (response.admin) {
                                data = [{ ...data, admin: true }];
                            } else {
                                data = [{ ...data, admin: false }];
                            }
                            return res.send({ ...data })
                        } else {
                            res.statusMessage = "Hibás jelszó";
                            return res.sendStatus(400).end();
                        }
                    }
                    else {
                        res.statusMessage = "A felhasználó nem létezik";
                        return res.sendStatus(400).end();
                    }
                })
                .catch(() => {
                    res.statusMessage = "A felhasználó nem létezik";
                    return res.sendStatus(400).end();
                })

        } else {
            res.statusMessage = "Helytelen adatbevitel!";
            return res.sendStatus(400).end();
        }
    } catch (e) {
        res.statusCode(500);
    }
}

exports.logout = (req, res) => {

    const session = req.cookies['LOCAL_KEY'];

    if (session) {

        User.findOne({ session })
            .then((response) => {

                if (response) {

                    User.updateOne({ session }, { $unset: { session } })
                        .then(() => {

                            res.clearCookie('LOCAL_KEY');
                            res.statusMessage = "Successful logout";
                            return res.sendStatus(200).end();

                        })
                        .catch((error) => { return res.send(error) })
                }
            })
            .catch((error) => {
                res.send(error);
            })
    } else {
        res.statusMessage = "No session key found";
        res.sendStatus(401);
    }
}

exports.requestPasswordChange = (req, res) => {
    try {
        if (req.body.email) {

            let email = req.body.email;
            const generatedToken = makeid(32);

            User.findOne({ email })
                .then((user) => {
                    if (user) {
                        User.updateOne({ email }, { $set: { "passwordToken": generatedToken } })
                            .then(() => {
                            })
                            .catch((error) => {
                                console.log(error);
                            })

                        transport.sendMail({
                            from: "tamas.robert1@students.jedlik.eu",
                            to: user.email,
                            subject: "Webshop - Jelszó megváltoztatása",
                            html: "<h3>Új jelszó igénylése</h3><br><p>Kattints a linkre a jelszó megváltoztatásához: http://localhost:8080/change-password/' + generatedToken + ' </p>"
                        });

                        res.statusMessage = "Password change request sent";
                        return res.status(200).end();
                    } else {
                        res.statusMessage = "Email does not exist";
                        return res.sendStatus(400).end();
                    }
                })
                .catch(() => {
                    res.statusMessage = "Email does not exist";
                    return res.sendStatus(400).end();
                })

        } else {
            res.statusMessage = "No data were sent";
            return res.sendStatus(400).end();
        }
    } catch (e) {
        res.statusCode(500);
    }
}

exports.changePassword = (req, res) => {
    try {
        if (req.body.token && req.body.newPassword) {

            let token = req.body.token;

            User.findOne({ "passwordToken": token })
                .then(async (response) => {

                    if (response) {

                        let password = await bcrypt.hash(req.body.newPassword, 5);

                        User.updateOne({ "passwordToken": token }, { $set: { password }, $unset: { "passwordToken": "" } })
                            .then(() => {
                                return res.send("Password changed successfully");
                            })
                            .catch((error) => {
                                return res.send(error);
                            })

                    } else {

                        res.statusMessage = "Bad token";
                        return res.sendStatus(400).end();

                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            res.statusMessage = "newPassword not set";
            return res.sendStatus(400).end();
        }
    } catch (e) {
        res.sendStatus(500);
        console.log(e)
    }
}

exports.addToWishList = (req, res) => {

    const session = req.cookies['LOCAL_KEY'];
    const _id = req.params.productId;

    if (session) {

        User.findOne({ session })
            .then((response) => {

                if (response) {

                    var productWishList = [...response.wishList];

                    Product.findById(_id)
                        .then(product => {

                            productWishList.push(product);

                            User.updateOne({ session }, { wishList: productWishList })
                                .then(() => { return res.sendStatus(200).end() })
                                .catch((error) => { return res.send(error) })

                        })
                        .catch(err => console.log(err));
                }
            })
            .catch((error) => {
                res.send(error);
            })
    } else {
        res.statusMessage = "No session key found";
        res.sendStatus(401);
    }
}