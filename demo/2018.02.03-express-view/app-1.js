// 混合使用多种模板引擎
var express = require('express');
var app = express();

app.get('/index.jade', function (req, res, next) {
  res.render('index.jade', {title: 'jade'});
});

app.get('/index.ejs', function (req, res, next) {
  res.render('index.ejs', {title: 'ejs'});
});

app.listen(3000);