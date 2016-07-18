var HOST = '127.0.0.1';
var PORT = '3000';
var http = require('http');

var server = http.createServer(function(req, res){

	console.log('服务端:request事件触发: ');
	console.log(req.headers);

	req.setEncoding('utf8');

	req.on('data', function(chunk){
		//console.log('收到客户端数据:' + chunk);
	});

	req.on('end', function(){
		//console.log('客户端数据传输完成');

		res.writeHead(200, {'Connection': 'keep-alive'});
		res.end('fuck');
	});

	req.on('close', function(){
		//console.log('客户端连接断掉');
	});

	res.end();
});

//server.on('connect', function(){
//	console.log('服务端:connect事件触发');
//});

server.on('connection', function(){
	console.log('服务端:connection事件触发');
});

server.listen(PORT, HOST, function(){
	console.log('服务端:开始监听连接');
});


var index = 0;
var times = 5;
var sendClientMsg = function(){

	var options = {
		method: 'POST',
		protocol: 'http:',
		hostname: HOST,
		port: PORT,
		path: '/',
		agent: new http.Agent({
			keepAlive: true
		})
	};

	var client = http.request(options, function(res){
		//console.log('收到服务端应答');

		res.on('data', function(){
			//console.log('收到服务端应答数据');
		});

		res.on('finish', function(){
			//console.log('close');
		});

		times--;

		console.log(times);

		if(times>=0){
			console.log(times);
			sendClientMsg();
		}

		//client.end();
	});

	var msg = '客户端数据: ' + (++index);
	client.write(msg, 'utf8', function(){
		// console.log('客户端数据flushed');
	});
};

setTimeout(function(){
	sendClientMsg();
}, 500);


//var timer = setInterval(function(){
//	times--;
//	if(times<0){
//		clearInterval(timer);
//		return;
//	}
//	sendClientMsg();
//}, 0);