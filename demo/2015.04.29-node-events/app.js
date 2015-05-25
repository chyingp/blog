var obj = new (require('events').EventEmitter)();

console.log('the start!');

obj.on('compile:start', function(){
	console.log('compile:start');
});

obj.on('compile:end', function(){
	console.log('compile:end');
});

obj.emit('compile:start');
obj.emit('compile:end');

console.log('the end!');