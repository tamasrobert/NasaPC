var express = require('express');
var router = express.Router();

// import authentication controller
const authController = require('../controllers/authentication');

// register a new user
router.post('/api/register', authController.register);

// verify registration
router.post('/api/verify-account/:token', authController.verifyRegistration);

// session check
router.get('/api/session', authController.getSession);

// login
router.post('api/login', authController.login)


module.exports = router;