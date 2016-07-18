var HOST = '127.0.0.1';
var PORT = '3000';
var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
	var responseChunk = '';

	req.setEncoding('utf8');

	req.on('data', function(chunk){
		responseChunk += chunk;
	});

	req.on('end', function(){
		var body = querystring.parse(responseChunk, true);
		res.end('post content: ' + JSON.stringify(body));
	});
});

server.listen(PORT, HOST, function(){
	console.log('服务端:开始监听连接');
});

