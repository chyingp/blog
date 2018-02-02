var express = require('express');
var app = express();

app.get('/user', function (req, res, next) {
  console.log('log');
  next();
});

app.get('/user', function (req, res, next) {
  res.end('ok');
});

app.listen(3000);