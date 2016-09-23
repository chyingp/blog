var child_process = require('child_process');
var child = child_process.spawn('node', ['child.js'], {
	detached: true,
	stdio: 'ignore'  // 备注：如果不置为 ignore，那么 父进程还是不会退出
	// stdio: 'inherit'
});

child.unref();