var child_process = require('child_process');
var fs = require('fs');
var fd = fs.openSync('./output.txt', 'r+');

var env = Object.assign({
	NODE_CHANNEL_FD: fd
}, process.env);

console.log(env);

child_process.fork('./child.js', {
	env: env,
	execPath: '/Users/a/.nvm/versions/node/v6.1.0/bin/node'
});