var http = require('http'),
	server = http.createServer();

var handleReq = function(req, res) {
	res.writeHead(200, {});
	res.end('hello world');
};

server.on('connection', function(){
	console.log('handle connection');
});
server.on('request', handleReq);
server.listen('3000');