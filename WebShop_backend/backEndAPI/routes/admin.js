var express = require('express');
var router = express.Router();

const adminController = require('../controllers/admin');

// insert/add/create a new product --- no image selected -> placeholder - public/images/NoImage.png
router.post('/api/admin/add-product-no-image', adminController.addProductNoImage);

// insert/add/create a new product --- has image selected
router.post('/api/admin/add-product', adminController.addProduct);

// modify a product
router.put('/api/admin/modify-product/:productId', adminController.modifyProduct);

// delete a product
router.delete('/api/admin/delete-product/:productId', adminController.deleteProduct);

module.exports = router;
