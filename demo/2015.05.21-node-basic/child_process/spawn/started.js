var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-al'], {
	stdio: 'inherit'
});