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
                            subject: "NasaPC - Requested password change",
                            html: "<h3>New password</h3><br><p>Click this link to change your password: http://localhost:8080/change-password/' + generatedToken + ' </p>"
                        });
                        return res.status(200).json({ "message": "Password change request sent!" });
                    } else {
                        return res.sendStatus(400).json({ "error": "Email does not exist!" });
                    }
                })
                .catch(() => {
                    return res.sendStatus(400).json({ "error": "Email does not exist!" });
                })

        } else {
            return res.sendStatus(400).json({ "error": "No data received!" });
        }
    } catch (error) {
        return res.status(500).json({ "error": "Unexpected error!" });
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
                                return res.status(200).json({ "message": "Password changed successfully!" });
                            })
                            .catch((error) => {
                                return res.status(500).json({ "error": "Unexpected error!" });
                            })

                    } else {
                        return res.status(400).json({ "error": "Bad token!" });
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            return res.status(400).json({ "error": "newPassword not set!" });
        }
    } catch (error) {
        return res.status(500).json({ "error": "Unexpected error!" });
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
                                .catch((error) => { return res.status(500).json({ "error": "Failed to add to wishlist!" }) })

                        })
                        .catch(err => { res.status(404).json({ "error": "Product not found!" }); });
                }
            })
            .catch((error) => {
                res.status(404).json({ "error": "User not found!" });
            })
    } else {
        res.status(401).json({ "error": "No session!" });
    }
}