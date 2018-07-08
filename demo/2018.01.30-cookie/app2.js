// 例子：cookie 签名与校验
var express = require('express');
var cookieParser = require('cookie-parser');
var cookie = require('cookie');
var app = express();

app.use(cookieParser('secret'));

app.use(function (req, res, next) {
  var cookieObj = cookie.parse(req.headers.cookie || '');
  console.log(cookieObj.nick); // s:chyingp.TagvkTTrfc1rSGiJ9U52zn3AF1kOGTV6wQUSj/Ly0AY

  console.log(req.cookies.nick); // chyingp
  console.log(req.signedCookies.nick); // nick
  next();
});

app.use(function (req, res, next) {  
  res.cookie('nick', 'chyingp', {signed: true});
  res.end('ok');
});

app.listen(3000);