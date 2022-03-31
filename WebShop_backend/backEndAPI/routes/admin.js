var express = require('express');
var router = express.Router();

const adminController = require('../controllers/admin');

// insert/add/create a new product --- no image selected -> placeholder - public/NoImage.png
router.post('/api/admin/add-product-no-image', adminController.addProductNoImage);

// insert/add/create a new product --- has image selected
router.post('/api/admin/add-product', adminController.addProduct);

module.exports = router;
