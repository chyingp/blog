var net = require('net');

var server = net.createServer(function(socket){
	console.log('Log from server: localAddress is ' + socket.localAddress);
	console.log('Log from server: remoteAddress is ' + socket.remoteAddress);
	
	socket.end('hello world');
});

server.listen(3131, '0.0.0.0');