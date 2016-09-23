var spawn = require('child_process').spawn;
var grep = spawn('grep', ['nodejs']);

setTimeout(function(){
	grep.stdin.write('hello nodejs \n hello javascript');
	grep.stdin.end();
}, 2000);

grep.stdout.on('data', function(data){
	console.log('data from grep: ' + data);
});

grep.on('close', function(code){
	console.log('grep exists with code: ' + code);
});