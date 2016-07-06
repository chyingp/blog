var exec = require('child_process').exec;
var du = exec('du -sh ./', function(error, stdout, stderr){
	if(error!=null){
		console.log('child process terminated with code: ' + error.code);
		return;
	}

	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
});

var wc = exec('cat *.js | wc', function(error, stdout, stderr){
	if(error!=null){
		console.log('child process terminated with code: ' + error.code);
		return;
	}

	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
});