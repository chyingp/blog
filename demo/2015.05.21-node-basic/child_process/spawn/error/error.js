var spawn = require('child_process').spawn;
var child = spawn('bad_command');

child.on('error', (err) => {
  console.log('Failed to start child process 1.');
});

var child2 = spawn('ls', ['nonexistFile']);

child2.stderr.on('data', function(data){
	console.log('Error msg from process 2: ' + data);
});

child2.on('error', (err) => {
  console.log('Failed to start child process 2.');
});
