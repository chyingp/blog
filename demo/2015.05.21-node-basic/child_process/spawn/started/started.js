var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-al']);

ls.stdout.on('data', function(data){
	console.log('data from child: ' + data);
});


ls.stderr.on('data', function(data){
	console.log('error from child: ' + data);
});

ls.on('close', function(code){
	console.log('child exists with code: ' + code);
});