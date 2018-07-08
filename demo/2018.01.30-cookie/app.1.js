// cookie-parser 解析cookie原理
var express = require('express');
var cookie = require('cookie');
var app = express();

// 大致如下
app.use(function (req, res, next) {
  req.cookies = cookie.parse(req.headers.cookie);
  next();
});

app.use(function (req, res, next) {
  console.log(req.cookies.nick); // chyingp
  next();
});

app.use(function (req, res, next) {  
  res.cookie('nick', 'chyingp');
  res.end('ok');
});

app.listen(3000);