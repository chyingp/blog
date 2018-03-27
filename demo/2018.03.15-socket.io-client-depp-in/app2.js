var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/view/index.html');
});

app.get('/socket.io.fm.js', function (req, res) {
  res.sendfile(__dirname + '/public/socket.io.fm.js');
});

app.get('/socket.io.js', function (req, res) {
  res.sendfile(__dirname + '/public/socket.io.js');
});

app.get('/socket.io.js.map', function (req, res) {
  res.sendfile(__dirname + '/public/socket.io.js.map');
});

var io = require('socket.io')(server)//.of('/test');

// io.use(function (socket, next) {
//   next(new Error('bye'));
// });

io.on('connection', socket => {
  console.log('socket.id: %s', socket.id);
  socket.on('news', data => {
    console.log('news from client: %s', data);
  });
  setTimeout(() => {
    // socket.emit('news', { nick: 'b' })
    // socket.emit('news2', { hello: 'world' })
  }, 1000);  
  // socket.emit('news', { hello: 'world' })
  // socket.emit('news', { nick: 'a' })
});

server.listen(3000);

