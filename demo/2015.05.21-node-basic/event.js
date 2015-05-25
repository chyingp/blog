var EventEmitter = require('events').EventEmitter,
	util = require('util');

var Server = function(){
	console.log('server init');
};

util.inherits(Server, EventEmitter);

var s = new Server();
s.on('start', function(nick, time){
	console.log('server is started by %s at %s', nick, time);
});
s.emit('start', 'chyingp', new Date());


