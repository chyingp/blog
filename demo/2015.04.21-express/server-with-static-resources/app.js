var express = require('express'),
	app = express(),
	compression = require('compression');;

app.use(compression({threshold: 0}));
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
	res.send('Hello World\n');
});
app.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');