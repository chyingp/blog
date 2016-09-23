var net = require('net');

var socket = new net.Socket();

socket.on('lookup', function(err, address, family, host){
	console.log('Event: lookup. Address is: ' + address);
});

socket.on('connect', function(){
	console.log('Event: connect.');
});

// socket.on('data', function(data){
// 	console.log('Event: data. Received data from server');
// });

socket.on('end', function(){
	console.log('Event: end. Received FIN from server');
});

socket.on('close', function(){
	console.log('Event: close.');
});

socket.connect(3131, 'localhost');