var express = require('express');
var router = express.Router();

// import product controller
const productController = require('../controllers/product.js');

// get all products
router.get('/api/products', productController.getAllProducts);

// search for a specific product by Id
router.get('/api/product/:productId', productController.getProductById);

// add a review to a product
router.post('/api/postReview/:productId', productController.postReview);

module.exports = router;
