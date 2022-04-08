const express = require('express');
const router = express.Router();

// import user controller
const userController = require('../controllers/user');

// request password change
router.post('/api/request-password-change', userController.requestPasswordChange)

// change password
router.post('/api/change-password', userController.changePassword)

// add to wishList
router.post('/api/add-to-wishlist/:productId', userController.addToWishList)

module.exports = router;
