var Memcached = require('memcached');
var memcached = new Memcached('localhost:11211');  // 连接服务

// 写入数据，这四个参数分别为 key、value、过期时间、回调
memcached.set('nick', 'hello', 10000, function(err, result){
	if(err) console.log(err);

	console.log(result);

	memcached.end();  // 断开服务
});