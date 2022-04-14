const Product = require('../models/product');

exports.getAllProducts = (req, res) => {

  Product.find()
    .then(products => res.json(products))
    .catch(() => res.status(500).json({ "error": "Unexpected error!" }))
};

exports.getProductById = (req, res) => {

  let _id = req.params.productId;

  Product.findOne({ _id })
    .then(product => {
      if (product != null) res.status(200).json(product)
      else res.status(404).json({ "error": "Product not found!" })
    })
    .catch(() => res.status(404).json({ "error": "Product not found!" }))

};