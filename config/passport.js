var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy

passport.serializeUser(function (user, done){
    done(null, user.id)
});

passport.deserializeUser(function (id, done){
    User.find({id:id},function (err, user){
       done(err, user)
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},  function (req,email,password,done){
     User.findOne({email:email},async function (err, user){
         console.log(user);
        if (err) return done(err)
        if (user) return done(null,false,{message: 'This mail already taken'})

            var newUser = new User();
            newUser.email = email;
            newUser.password = await newUser.bcryptUserPassword(password);
            newUser.save().then((user) => done(null, user))
                .catch((error) => done(error));
    });



}))
