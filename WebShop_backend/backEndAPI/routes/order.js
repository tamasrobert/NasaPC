const express = require('express');
const router = express.Router();

// import order controller
const orderController = require('../controllers/order.js');

// place a new order
router.post('/api/place-order', orderController.placeOrder);

module.exports = router;
