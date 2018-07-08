var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.use(function (req, res, next) {
  console.log(req.cookies.nick); // chyingp
  next();
});

app.use(function (req, res, next) {  
  res.cookie('nick', 'chyingp');
  res.end('ok');
});

app.listen(3000);