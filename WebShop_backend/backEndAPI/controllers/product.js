const Product = require('../models/product');

exports.getAllProducts = (req, res) => {
  Product
  .find()
  .then(products => {res.send(JSON.stringify(products))})
  .catch((error) => {res.send(JSON.stringify(error))})
};

exports.getProductById = (req, res) => {
  let id = req.params.productId;
  Product
  .find(id)
  .then(product => {res.send(JSON.stringify(product))})
  .catch((error) => {res.send(JSON.stringify(error))})
};