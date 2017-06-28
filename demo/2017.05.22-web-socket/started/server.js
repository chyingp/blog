var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var compression = require('compression');

server.listen(3000);

// app.use(compression());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  setInterval(function () {
    socket.emit('news', { hello: 'world' })
  }, 1000);
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});

/*
var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(app);

server.listen(3000);
*/

/*
app.listen(3000);

等同于 http.createServer(app).listen(3000);
*/