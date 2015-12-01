var Memcached = require('memcached');
var memcached = new Memcached('localhost:11211');	// 连接服务

memcached.get('nick', function(err, result){
	if(err) console.log(err);
	
	console.log(result);
	
	memcached.end();  // 断开连接
});