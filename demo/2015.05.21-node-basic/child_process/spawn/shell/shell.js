var spawn = require('child_process').spawn;

// 运行 echo "hello nodejs" | wc
var ls = spawn('bash', ['-c', 'echo "hello nodejs" | wc'], {
	stdio: 'inherit',
	shell: true
});

ls.on('close', function(code){
	console.log('child exists with code: ' + code);
});