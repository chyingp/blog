// 测试：模板引擎
var path = require('path');
var express = require('express');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function (req, res, next) {
  res.render('index', {title: 'chyingp'}, function (error, html) {
    console.log(html);
    res.end(html);
  });
});

app.use(function (req, res, next) {
  res.render('none_existed_view');
});

app.use('index', function (req, res, next) {
  res.render('index');
});

app.use('test', function (req, res, next) {
  res.render('none_existed_view');
});

app.listen(3000);
