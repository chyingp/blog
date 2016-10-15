var net = require('net');

var socket = new net.Socket();

socket.on('connect', function(){
	console.log('Log from client: localAddress is ' + socket.localAddress);
	console.log('Log from client: remoteAddress is ' + socket.remoteAddress);
});

socket.connect(3131, '120.76.162.47');