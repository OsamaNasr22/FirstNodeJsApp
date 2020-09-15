var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport')
var userController = require('../controllers/user')
var csrfProtection = csrf()
var {body, validationResult} = require('express-validator')
var rules = () =>{
    return [
        body('email','Email is invalid').notEmpty().bail().isEmail().bail(),
        body('password', 'Password is invalid').notEmpty().bail().isLength({min:8}).bail()
    ];
}

var signUpValidation = (req, res, next) => {
var errors = validationResult(req);
if (errors.isEmpty()) return next();

var messages = [];
errors.array().map((err) => messages.push(err.msg));
req.flash('error', messages);
res.redirect('/user/register')

}

router.get('/register', [
    csrfProtection,
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isLength({min:8})
],userController.getRegisterPage)
router.post('/register',[csrfProtection, rules(), signUpValidation] ,passport.authenticate('local.signup',{
    successRedirect: "/user/profile",
    failureRedirect: "/user/register",
    failureFlash: true
}));
router.get('/profile',userController.getProfile);

module.exports = router;
