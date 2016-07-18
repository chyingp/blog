var http = require('http');

var client = http.get('http://www.cnblogs.com/', function(res){
	var resThunk = '';

	res.setEncoding('utf8');

	res.on('data', function(thunk){
		resThunk += thunk;
	});

	res.on('end', function(){
		console.log('返回状态码:' + res.statusCode);
		console.log('返回结果:\n' + resThunk);
	});

});

client.on('error', function(e){
	console.log('请求出错:' + e.message);
});