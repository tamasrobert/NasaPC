var express = require('express');
var router = express.Router();

const adminController = require('../controllers/admin');

// insert/add/create a new product --- no image selected -> placeholder - public/NoImage.png
router.post('/api/products/add-product-no-image', adminController.addProductNoImage);

module.exports = router;
