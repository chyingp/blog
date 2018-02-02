var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
  res.end('/');
  next();
});

app.get('/', function (req, res, next) {
  console.log('here');
});

app.get('/user', function (req, res, next) {
  res.end('/user');
});

app.get('/user/12', function (req, res, next) {
  res.end('/user/12');
});

app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

app.listen(3000);