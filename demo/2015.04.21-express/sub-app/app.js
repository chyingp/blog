var express = require('express');
var App = express();
// var User = express.Router();

// User.get('/detail', function(req, res, next){
// 	var arr = [
// 		'req.baseUrl:' + req.baseUrl,
// 		'req.app.mountpath: ' + req.app.mountpath, 
// 		'req.originalUrl:' + req.originalUrl,
// 		'req.path:' + req.path
// 	];
// 	res.send(arr.join('<br/>'));
// });

// App.use('/user', User);
// App.param('id', function(req, res, next, value){
// 	console.log('A: id is ' + value);
// 	next();
// });
// App.param('id', function(req, res, next, value){
// 	console.log('C: id is ' + value);
// 	next();
// });
App.use('/user/:id', function(req, res, next){
	console.log('B: id is ' + req.params.id);
	res.send('ok');
});
App.listen(3000);
