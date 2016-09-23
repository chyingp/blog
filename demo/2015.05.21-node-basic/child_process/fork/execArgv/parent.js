var child_process = require('child_process');

console.log('parent execArgv: ' + process.execArgv);

child_process.fork('./child.js', {
	execArgv: process.execArgv
});