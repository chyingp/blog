var express = require('express'),
	app = express(),
	compression = require('compression');;

// routers based on path
app.get('/hello', function(req, res, next) {
	res.send('hello');
});

app.get('/world', function(req, res, next) {
	res.send('world');
});

// router based on method
app.get('/login', function(req, res, next){
	res.send('login page requested!');
});

app.post('/login', function(req, res, next){
	res.send('login API requested! \n\n');
});

// router with regular expression
app.get(/^\/cgi-bin\/(\w+)$/, function(req, res, next){
	res.send('CGI '+ req.params[0] +' is called !');	
});

app.get('/cgi-bin/agency/:cgi_name', function(req, res, next){
	res.send('Agency CGI '+ req.params.cgi_name +' is called !');
});

app.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');