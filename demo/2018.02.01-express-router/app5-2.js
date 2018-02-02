var express = require('express');
var app = express();

// 备注：req.url 内部会被重写
app.use('/admin', function (req, res, next) {  // GET 'http://www.example.com/admin/new'
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  console.log(req.url); // '/new'
  
  res.end('ok');
});

app.listen(3000);