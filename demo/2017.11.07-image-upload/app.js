var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

var routes = require('./routes/index');
var users = require('./routes/users');

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

// app.use('/', routes);
// app.use('/users', users);
function fixzero (num) {
  return num >= 10 ? num + '' : '0' + num;
}

function createTimeStr () {
  var date = new Date();
  return [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ].map(fixzero).join('-');
}

app.get('/filereader', function (req, res) {
  res.render('filereader');
});

app.get('/formdata', function (req, res) {
  res.render('formdata');
});

app.use('/upload', function (req, res) {
  var fs = require('fs');
  var outputStream = fs.createWriteStream(__dirname + '/uploads/' + createTimeStr() + '.' + req.headers['x-file-name']);
  req.pipe(outputStream);
  res.end('ok');
});

var uploadSingle = multer({ dest: 'uploads/' });
app.post('/upload-single', uploadSingle.single('file'), function(req, res, next){
	res.end('ok');
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
