const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.find()
      .then(products => {res.send(JSON.stringify(products))})
      .catch((error) => {res.send(JSON.stringify(error))})
  };