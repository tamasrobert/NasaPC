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
router.post('/api/login', authController.login)

// logout
router.get('/api/logout', authController.logout)

// request password change
router.post('/api/request-password-change', authController.requestPasswordChange)

// change password
//router.post('/api/change-password', authController.changePassword)

module.exports = router;