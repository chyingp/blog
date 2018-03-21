const debug = require('debug')("server");
const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ 
  host: 'localhost', port: 6379 
}));

io.on('connect', socket => {
  debug('[pid: %s] connected, socket.id = %s', process.pid, socket.id);
});

setInterval(() => {
  if (PORT == 3000) {
    io.emit('alarm', `process.pid = ${process.pid}, port = ${PORT}`);
  }
}, 3000);

debug('[pid: %s] listening on port %s', process.pid, PORT);