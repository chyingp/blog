var fork = require('child_process').fork;

console.log('p: 1');

fork('./c2.js');

console.log('p: 2');

// 从测试结果来看，同样是70ms，有的时候，定时器回调比子进程先执行，有的时候比子进程慢执行。
const t = 70;
setTimeout(function(){
	console.log('p: 3 in %s', t);
}, t);