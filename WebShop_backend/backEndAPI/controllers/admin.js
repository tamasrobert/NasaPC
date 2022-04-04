const User = require('../models/user');
const Product = require('../models/product');
const makeid = require('../util/makeid.js');

exports.addProductNoImage = (req, res) => {
    const session = req.cookies['LOCAL_KEY'];
    if (!session) return res.sendStatus(401);
    User.findOne({ session, 'admin': true })
        .then((response) => {
            if (!response) return res.sendStatus(401);
            var name = req.body.name;
            var category = req.body.category;
            var price = req.body.price;
            var description = req.body.description;
            var path = "NoImage.png";
            var discount = req.body.discount;

            Product.create({ name, category, price, description, path, discount })
                .then((result) => { return res.send(JSON.stringify(result)) })
                .catch((error) => { return res.send(JSON.stringify(error)) })
        })
        .catch((error) => { res.send(error) })
}

exports.addProduct = (req, res) => {
    const session = req.cookies['LOCAL_KEY'];
    if (!session) return res.sendStatus(401);
    User.findOne({ session, 'admin': true })
        .then((response) => {
            if (!response) return res.sendStatus(401);

            var name = req.body.name;
            var description = req.body.description;
            var price = req.body.price;
            var category = req.body.category;
            var path = req.body.path;
            var discount = req.body.discount;

            var product = new Product();
            product.name = name;
            product.description = description;
            product.price = price;
            product.category = category;
            product.path = path;
            product.discount = discount;

            product.save().then(response => { return res.status(201).send(response) });
        })
        .catch((error) => {
            res.send(error);
        })
}

exports.deleteProduct = (req, res) => {
    const session = req.cookies['LOCAL_KEY'];
    if (!session) return res.sendStatus(401);
    User.findOne({ session, 'admin': true })
        .then((response) => {
            if (!response) return res.sendStatus(401);
            let _id = req.params.productId;
            Product.findOne({ _id })
                .then((product) => {
                    Product.deleteOne({ _id })
                        .then((result) => {
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
            return res.status(500).send({"error":"There might be a problem. Please, try again."});
        })
}

exports.modifyProduct = (req, res) => {
    const session = req.cookies['LOCAL_KEY'];
    if (!session) return res.sendStatus(401);
    User.findOne({ session, 'admin': true })
        .then((response) => {
            if (!response) return res.sendStatus(401);
            let _id = req.params.productId;
            Product.findOne({ _id })
                .then((product) => {

                    var name = req.body.name;
                    var description = req.body.description;
                    var price = req.body.price;
                    var category = req.body.category;
                    var path = req.body.path;
                    var generatedFileName = '';
                    var discount = req.body.discount;

                    if(product.path == 'NoImage.png') {
                        generatedFileName = makeid(6) + ".jpg";
                    } else {
                        generatedFileName = path;
                    }

                    Product.updateOne({_id}, {$set: {name, category, description, price, 'path': generatedFileName, discount}})
                        .then((result) => {
                            Product.findOne({ _id }).then((result=>{res.send(result)}))
                        })
                        .catch((error) => {
                            return res.sendStatus(404);
                        })
                })
                .catch((error) => {
                    return res.sendStatus(404);
                })
        })
        .catch((error) => {
            return res.status(500).send({"error":"There might be a problem. Please, try again."});
        })
}