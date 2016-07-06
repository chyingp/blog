var net = require('net');

var PORT = 8989;
var HOST = '127.0.0.1';

var client = net.connect(PORT, HOST, function(){
	console.log('CONNECTED TO: ' + HOST + ':' + PORT);

	client.write("Hello server, I am casper!");	
});

client.on('data', function(data){
	console.log('Received data: ' + data);

	client.destroy();
});

client.on('close', function(){
	console.log('Connection closed!');
})
