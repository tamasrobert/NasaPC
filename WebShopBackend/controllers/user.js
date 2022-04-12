const User = require('../models/user');
const Product = require('../models/product');
const bcrypt = require('bcrypt');
const makeid = require('../util/makeid.js');
require("dotenv").config();

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