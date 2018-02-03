var express = require('express');
var app = express();
var router = express.Router();

router.get('/all', function (req, res, next) {
  res.end('/user/all');
});

app.use('/user', router);

app.listen(3000);