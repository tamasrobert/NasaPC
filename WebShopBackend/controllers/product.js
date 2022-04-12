const Product = require('../models/product');

exports.getAllProducts = (req, res) => {

  Product.find()
    .then(products => res.json(products))
    .catch((error) => res.json(error))

};

exports.getProductById = (req, res) => {

  let id = req.params.productId;
  
  Product.find(id)
    .then(product => res.json(product))
    .catch((error) => res.json(error))

};