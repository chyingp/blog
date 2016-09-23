var net = require('net');
var fs = require('fs');
var r = fs.createReadStream('./createClient.js');

var server = net.createServer(function(socket){
	// socket.write('= =b');
	// socket.pipe(socket);
	r.pipe(socket);
});

server.listen(3131, function(){
	// console.log('= =b');
});