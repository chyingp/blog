var HOST = '127.0.0.1';
var PORT = '3000';
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	var obj = url.parse(req.url);
	res.statusCode = 200;
	res.end('query string: ' + obj.query);
});

server.listen(PORT, HOST, function(){
	console.log('服务端:开始监听连接');
});