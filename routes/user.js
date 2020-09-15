var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport')
var userController = require('../controllers/user')
var csrfProtection = csrf()
router.get('/register', csrfProtection ,userController.getRegisterPage)
router.post('/register',csrfProtection ,passport.authenticate('local.signup',{
    successRedirect: "/user/profile",
    failureRedirect: "/user/register",
    failureFlash: true
}));
router.get('/profile',userController.getProfile);

module.exports = router;
