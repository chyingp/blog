var express = require('express');
var app = express();

app.use('/', function (req, res, next) {
  console.log('"/" matched');
  next();
});

app.use('/user', function (req, res, next) {
  console.log('"/user" matched');
  next();
});

app.use('/user/:uid', function (req, res, next) {
  console.log('"/user:/id" matched');
  res.end('user: ' + req.params.uid);
});

app.listen(3000);