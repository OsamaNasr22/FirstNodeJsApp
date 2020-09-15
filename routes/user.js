var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var userController = require('../controllers/user')
var csrfProtection = csrf()
router.get('/register', csrfProtection ,userController.getRegisterPage)
router.post('/register',csrfProtection ,userController.register)

module.exports = router;
