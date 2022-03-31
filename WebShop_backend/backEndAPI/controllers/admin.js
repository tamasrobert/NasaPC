const User = require('../models/user');
const Product = require('../models/product');
const makeid = require('../util/makeid.js');
const busboy = require('busboy');
const multer = require("multer");
const mongodb = require('mongodb');

exports.addProductNoImage = (req, res) => {
    const session = req.cookies['LOCAL_KEY'];
    if(!session) return res.sendStatus(401);
    User.findOne({session, 'admin':true})
        .then((response) => {
            if(!response) return res.sendStatus(401);
            var name = req.body.name;
            var category = req.body.category;
            var price = req.body.price;
            var description = req.body.description;
            var path = "NoImage.png";

            Product.create({name, category, price, description, path})
            .then((result) => {return res.send(JSON.stringify(result))})
            .catch((error) => {return res.send(JSON.stringify(error))})
        })
        .catch((error) => {res.send(error)})
}

exports.addProduct = (req, res) => {
    const session = req.cookies['LOCAL_KEY'];
    if(!session) return res.sendStatus(401);
    User.findOne({session, 'admin':true})
        .then((response) => {
            if(!response) return res.sendStatus(401);

            var name = req.body.name;
            var description = req.body.description;
            var price = req.body.price;
            var category = req.body.category;
            var path = req.body.path;
            
            var product = new Product();
            product.name = name;
            product.description = description;
            product.price = price;
            product.category = category;
            product.path = path;

            product.save().then(response=>{return res.status(201).send(response)});
        })
        .catch((error) => {
            res.send(error);
        })
}

exports.deleteProduct = (req, res) => {
    const session = req.cookies['LOCAL_KEY'];
    if(!session) return res.sendStatus(401);
    User.findOne({session, 'admin':true})
        .then((response) => {
            if(!response) return res.sendStatus(401);
            let _id = req.params.productId;
            Product.findOne({_id})
                .then((product) => {
                    Product.deleteOne({_id})
                        .then((result) => {
                            // if(product.path != 'NoImage.png') {
                            //     fs.unlink('public/images/products/' + product.path, (err) => {
                            //         if (err) console.log(err);
                            //     });
                            //     fs.unlink("../../WebShop/public/images/products/" + product.path, (err) => {
                            //         if (err) console.log(err);
                            //     });
                            // }
                            return res.json({ "Message": 'Deleted' });
                            
                        })
                        .catch((error) => {
                            return res.sendStatus(404);
                    })
                })
                .catch((error) => {
                    return res.sendStatus(404)
                })
        })
        .catch((error) => {
            res.statusMessage = "No _id found";
            return res.sendStatus(409);
        })
}