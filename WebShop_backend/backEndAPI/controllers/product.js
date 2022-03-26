const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product
  .find()
  .then(products => {res.send(JSON.stringify(products))})
  .catch((error) => {res.send(JSON.stringify(error))})
};

exports.getProduct = (req, res, next) => {
  let _id = req.params.productId;
  Product
  .findOne(_id)
  .then(console.log(_id))
  .then(product => {res.send(JSON.stringify(product))})
  .catch((error) => {res.send(JSON.stringify(error))})
};