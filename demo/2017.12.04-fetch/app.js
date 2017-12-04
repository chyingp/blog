var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var pages = require('./routes/page');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/page', pages);

app.get('/api/getting-started', function (req, res, next) {
  res.end('getting-started');
});

app.post('/api/del_user', function (req, res, next) {
  res.json({code: 0, data: {uid: req.body.uid}});
});

app.get('/api/with-credentials', function (req, res, next) {
  res.end(req.cookies.uid);
});

var cors = require('cors');
var corsOptions = {
  origin: 'http://www.chyingp.com:3000',
};

app.get('/api/cors', cors(), function (req, res, next) {
  res.end('ok');
});

app.get('/api/setting-request-header', function (req, res, next) {
  res.end(req.headers['x-my-header']);
});

app.get('/api/check_state', function (req, res, next) {
  res.sendStatus(req.query.status);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
