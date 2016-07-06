var exec = require('child_process').exec;

// 成功的例子
exec('ls -al', function(error, stdout, stderr){
	if(error) {
		console.error('error: ' + error);
		// return;
	}
	console.log('stdout: ' + stdout);
	console.log('stderr: ' + typeof stderr);
});

// 失败的例子
exec('ls hello.txt', function(error, stdout, stderr){
	if(error) {
		console.error('error: ' + error);
		// return;
	}
	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
});