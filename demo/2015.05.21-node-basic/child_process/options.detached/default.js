var child_process = require('child_process');
child_process.spawn('node', ['child.js'], {
	// stdio: 'inherit'
});