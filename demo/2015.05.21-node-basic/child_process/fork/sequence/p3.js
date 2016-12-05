var fork = require('child_process').fork;
var child = fork('./c3.js');

console.log(child.connected);

child.send('hello');