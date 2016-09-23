var child_process = require('child_process');
var fs = require('fs');

var out = fs.openSync('./out.log', 'a');
var err = fs.openSync('./err.log', 'a');

var child = child_process.spawn('node', ['child.js'], {
	detached: true,
	stdio: ['ignore', out, err]
});

child.unref();