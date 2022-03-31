const User = require('../models/user');
const Product = require('../models/product');

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