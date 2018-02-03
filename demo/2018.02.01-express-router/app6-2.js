var express = require('express');
var app = express();

app.route('/user/all')
  .get(function (req, res, next) {
    res.end('/user/all');
  });

app.listen(3000);  
