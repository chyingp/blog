var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getting-started', function(req, res, next) {
  res.render('getting-started');
});

router.get('/setting-request-options', function(req, res, next) {
  res.render('setting-request-options');
});

router.get('/setting-request-options', function(req, res, next) {
  res.render('setting-request-options');
});

router.get('/with-credentials', function (req, res, next) {
  res.cookie('uid', 10086);
  res.render('with-credentials');
});

router.get('/cors', function(req, res, next) {
  res.render('cors');
});

router.get('/setting-request-header', function(req, res, next) {
  res.render('setting-request-header');
});

router.get('/check-state', function(req, res, next) {
  res.render('check-state');
});


module.exports = router;
