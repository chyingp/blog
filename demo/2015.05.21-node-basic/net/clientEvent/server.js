var net = require('net');

var server = net.createServer(function(socket){
	// socket.end('');
	socket.end('hello world');
	// server.close();
});

server.on('listening', function(){
	console.log('Event: listening.');
});

server.on('connection', function(){
	console.log('Event: connection.');
});

server.on('close', function(){
	console.log('Event: close.');
});

server.listen(3131);