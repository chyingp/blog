// 同样的模板引擎，不同的扩展名
var express = require('express');
var app = express();

// 模板采用 tpl 扩展名
app.set('view engine', 'tpl');
// 对于以 tpl 扩展名结尾的模板，采用 jade 引擎
app.engine('tpl', require('jade').__express);

app.get('/index', function (req, res, next) {
  res.render('index', {title: 'tpl'});
});

app.listen(3000);