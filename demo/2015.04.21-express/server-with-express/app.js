var express = require('express'),
	app = express();

app.use(function(req, res, next) {
	res.send('Hello World\n');
});
app.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');