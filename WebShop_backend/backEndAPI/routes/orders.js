const express = require('express');
const router = express.Router();

// import order controller
const orderController = require('../controllers/order.js');

// get all orders -> post method used, as front-end sends
// CORS information
// include cookies and authentication headers in XHR(XMLHttpRequest).
router.get('/api/orders', orderController.getOrders);

module.exports = router;
