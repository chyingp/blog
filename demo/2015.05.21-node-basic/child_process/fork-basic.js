var fork = require('child_process').fork;
var son = fork('./son.js');

son.on('message', function(msg) {
	console.log('parent listen: ' + msg);
});

son.send({role: 'parent'});