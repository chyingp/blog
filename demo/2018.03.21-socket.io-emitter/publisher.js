var io = require('socket.io-emitter')({ 
  host: '127.0.0.1', 
  port: 6379
});

io.emit('time', new Date());