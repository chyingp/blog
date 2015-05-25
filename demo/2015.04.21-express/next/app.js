var express = require('express'),
	app = express();

app.use(function(req, res, next) {
	console.log('登录态校验');
	next();
});

app.use(function(req, res, next){
	console.log('参数校验');
});

app.listen(1234);