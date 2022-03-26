var express = require('express');
var router = express.Router();

// import authentication controller
const authController = require('../controllers/auth');

// register a new user
router.post('/api/register', authController.register);

module.exports = router;