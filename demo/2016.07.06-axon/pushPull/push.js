var axon = require('axon');
var sock = axon.socket('push');

sock.bind(3100);
console.log('push server started');

var index = 0;
setInterval(function(){
  sock.send('hello: ' + (++index));
}, 150);