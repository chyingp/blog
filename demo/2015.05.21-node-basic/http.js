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


// 客户端
var opts = {
	host: 'www.qq.com',
	port: 80,
	path: '/',
	method: 'GET'
};


var req = http.request(opts, function(res){
	// data是buffer类型的二进制数据		
	// 也可以先 res.setEncoding('utf-8')，在监听data
	res.on('data', function(data){		
		console.log(data.toString());
	});
});
req.end();	// request 会等待 end() 方法调用后,才初始化 HTTP 请求,因为在那之前,它不确定我们是否还会发送数据

// GET 的简便方法，method配置参数 不用了，.end() 也不用了
opts = {
	host: 'www.qq.com',
	port: 80,
	path: '/'
};
http.get(opts, function(res){
	res.on('data', function(data){		
		console.log(data.toString());
	});
});



opts = {
	host: '127.0.0.1',
	port: 3000,
	path: '/',
	method: 'POST'
};
req = http.request(opts, function(res){
	res.setEncoding('utf-8');
	res.on('data', function(data){		
		console.log(data.toString());
	});
});
req.write('chyingp');
req.write('27');
req.end();


