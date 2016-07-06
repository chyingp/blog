var spawn = require('child_process').spawn;
var du = spawn('du', ['-sh', './']);

du.stdout.on('data', function(data) {
	console.log('data: ' + data);
});

du.stderr.on('data', function(data){
	console.log('error: ' + data);
});

// TODO 跟exit的区别
du.on('close', function(code){
	console.log('child process exists with code: ' + code);
});
