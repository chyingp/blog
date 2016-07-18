var http = require('http');
var port = 3001;
var hostname = '127.0.0.1';

// 注意: createServer传入的回调会被自动加到"request"事件队列里
// "request"事件触发的时机为: 有新的请求过来 --> 所以即使同一个请求分都次向server发送数据,这个回调也只会触发一次
var server = http.createServer(function(req, res){
	console.log('Client request comes!');

	req.setEncoding('utf8');

	req.on('data', function(chunk){
		console.log('Client data got: ' + chunk);
	});

	req.on('end', function(){
		console.log('Client sends: end');
	});
});

server.on('error', function(e){
	console.log('server says: error occured! ' + e.message);
});

//server.on('end', function(){
//	console.log('Client sends: end');
//});

server.listen(port, hostname);

var reqOptions = {
	method: 'GET',
	protocol: 'http:',
	hostname: hostname,
	port: port,
	path: '/',
	headers: {
		'Transfer-Encoding': 'chunked'
	}
};

var req = http.request(reqOptions, function(res){
	res.sendEncoding('utf8');
});

req.on('error', function(e){
	console.log('client says: error occured! ' + e.message);
});

var dataList = ['A', 'B', 'C', 'D', 'E'];

var timer = setInterval(function(){
	var data = dataList.shift();
	req.write(data);

	console.log(data);

	if(!dataList.length){
		clearInterval(timer);
		req.end();
		console.log('Client: end.');
	}
}, 1000);