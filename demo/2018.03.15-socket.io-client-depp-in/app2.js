var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/view/index.html');
});

app.get('/socket.io.js', function (req, res) {
  res.sendfile(__dirname + '/public/socket.io.js');
});

app.get('/socket.io.js.map', function (req, res) {
  res.sendfile(__dirname + '/public/socket.io.js.map');
});

var io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('socket.id: %s', socket.id);
  socket.on('news', data => {
    console.log('news from client: %s', data);
  });
  setTimeout(() => {
    socket.emit('news', { hello: 'world' })
    socket.emit('news2', { hello: 'world' })
  }, 3000);  
});

server.listen(3000);

