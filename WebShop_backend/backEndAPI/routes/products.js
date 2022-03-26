var express = require('express');
var router = express.Router();

// import product controller
const productController = require('../controllers/product.js');

// get all products
router.get('/api/products', productController.getProducts);

// search for a specific product
router.get('/api/product/:porductId', productController.getProduct);

module.exports = router;
