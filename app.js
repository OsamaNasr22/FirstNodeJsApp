var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var handlebars = require('express-handlebars');
var mongoose = require('mongoose')
var session = require('express-session')
var passport = require('passport');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true })
require('./config/passport')

var app = express();

// view engine setup
app.engine('.hbs', handlebars({ defaultLayout: 'layout', extname: '.hbs'}))
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "6qNWCYc7lL4luSO4LAjjYTqmuzuG",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  cookie: {maxAge: 180 * 60 * 1000}
}) );

app.use(flash());
app.use(passport.initialize());
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req,res,next){
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

app.use('/cart', require('./routes/carts'))
app.use('/user',require('./routes/user'))

app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
