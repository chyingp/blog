var http = require('http');
var options = {
	protocol: 'http:',
	hostname: 'www.qq.com',
	port: '80',
	path: '/',
	method: 'GET'
};

var client = http.request(options, function(res){
	res.setEncoding('utf8');
	res.on('data', function(chunk){
		console.log('chunk');
	});
	res.on('end', function(){
		console.log('no more data');
	});
});

client.end();