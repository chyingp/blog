var child_process = require('child_process');

// 例子一：会打印出 output from the child
// 默认情况，silent 为 false，子进程的 stdout 等
// 从父进程继承
child_process.fork('./child.js', {
	silent: false
});

// 例子二：不会打印出 output from the silent child
// silent 为 true，子进程的 stdout 等
// pipe 向父进程
child_process.fork('./silentChild.js', {
	silent: true
});

// 例子三：打印出 output from another silent child
var child = child_process.fork('./anotherSilentChild.js', {
	silent: true
});

child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data){
	console.log(data);
});