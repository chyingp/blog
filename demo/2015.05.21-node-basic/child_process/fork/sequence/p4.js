var fork = require('child_process').fork;
var child = fork('./c4.js');

console.log('p: 1');

setTimeout(function(){
	// 备注：即便在nextTick里，console.log('p: 2'); 也比 child.js 里的message回调先执行
	// 进程间通信比较耗时的佐证？
	child.send('hello');
	process.nextTick(function(){
		console.log('p: 2');	
	})	
}, 1000);
