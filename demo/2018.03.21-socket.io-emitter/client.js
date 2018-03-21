var socket = require('socket.io-client')('http://localhost:3001');
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});
socket.on('alarm', (msg) => {
  console.log(msg);
});