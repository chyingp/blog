var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'demo',
  genid: function (req) {
    return req.query.usrname;
  },
  // cookie: {
  //   maxAge: 5000
  // }
}));

app.use(function (req, res, next) {
  req.sessionStore.get(req.query.usrname, function (usrname) {
    console.log( usrname );
    res.end(usrname);
  });
  // console.log( usrname );
  // res.end(usrname);
});

// app.use('/view', function(req, res, next){
//   var open_id = req.query.open_id; 
  
//   // res.cookie('nick', sess.id);
//   if(req.session.cur_open_id!=open_id){
//     req.session.regenerate(function(){      
//       req.session.cur_open_id = open_id;
//       req.session.views = 1;
//       res.send('user visits ' + req.session.views + ' times!');
//     });
//   }else{
//     req.session.views++;
//     res.send('user visits ' + req.session.views + ' times!');
//   }

//   // if(!req.session[open_id]){
//   //   req.session[open_id] = 1;
//   // }else{
//   //   req.session[open_id]++;
//   // }  
// });

// app.use('/hello', function(req, res, next){
//   res.cookie('nick', 'hello');
//   res.redirect('/world');
// });

// app.use('/world', function(req, res, next){
//   res.send('world');
// });

// app.use('/', routes);
// app.use('/users', users);

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
