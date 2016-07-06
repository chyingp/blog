var express = require('express');

var app1 = express();
app1.use('/hello', function(req, res, next){
	res.send('hello');
});
app1.listen(3100);

var app2 = express();
app2.use('/world', function(req, res, next){
	res.send('world');
});
app2.listen(3200);





// app.get('/user.html', function(req, res, next){
// 	// console.log('1');
// 	// next();
// 	res.send('ok');
// });

// // app.use('/user', function(req, res, next){
// // 	console.log('2');
// // 	res.send('ok');
// // });

// app.listen(3000);

