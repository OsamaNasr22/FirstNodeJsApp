var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport')
var userController = require('../controllers/user')
var csrfProtection = csrf()
var {body, validationResult} = require('express-validator')
var signUpRules = () =>{
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
res.redirect(`/user${req.url}`)

}

router.get('/register', [
    csrfProtection,
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isLength({min:8})
],userController.getRegisterPage)

router.post('/register',[csrfProtection, signUpRules(), signUpValidation] ,passport.authenticate('local.signup',{
    successRedirect: "/user/profile",
    failureRedirect: "/user/register",
    failureFlash: true
}));

router.get('/profile',userController.getProfile);
router.get('/login',csrfProtection,userController.getLoginPage)

router.post('/login',[csrfProtection,signUpRules(), signUpValidation],passport.authenticate('local.login',{
    successRedirect: "/user/profile",
    failureRedirect: "/user/login",
    failureFlash: true
}));

module.exports = router;
