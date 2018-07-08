var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

// 初始化中间件，传入的第一个参数为singed secret
app.use(cookieParser('secret'));

app.use(function (req, res, next) {
  console.log(req.cookies.nick); // chyingp
  console.log(req.signedCookies.nick); // chyingp
  next();
});

app.use(function (req, res, next) {  
  // 传入第三个参数 {signed: true}，表示要对cookie进行摘要计算
  res.cookie('nick', 'chyingp', {signed: true});
  res.end('ok');
});

app.listen(3000);