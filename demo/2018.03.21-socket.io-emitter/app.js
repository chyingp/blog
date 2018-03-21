var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
const redisAdapter = require('socket.io-redis');
var debug = require('debug')("app.js");
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/socket.io.js', function (req, res) {
  res.sendfile(__dirname + '/socket.io.js');
});

var io = require('socket.io')(server);
io.adapter(redisAdapter({ 
  host: 'localhost', port: 6379 
}));

io.on('connection', socket => {
  debug('[pid: %s] connected, socket.id = %s', process.pid, socket.id);
  // socket.on('news', data => {
  //   debug('news from client: %s', data);
  // });  
});

setInterval(() => {
  if (PORT == 3000) {
    let msg = `process.pid = ${process.pid}, port = ${PORT}`;    
    io.emit('alarm', msg);
    debug(msg);
  }
}, 3000);

server.listen(PORT);

debug('[pid: %s] listening on port %s', process.pid, PORT);

