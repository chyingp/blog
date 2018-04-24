var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
  path: '/path'
});
var cookieParser = require('cookie-parser');
// var compression = require('compression');

server.listen(3000);

// app.use(compression());

app.use(cookieParser());

app.get('/oc/index.html', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var arr = [];

io.on('connection', function (socket) {
  arr.push(socket);
  // setInterval(function () {
  //   socket.emit('news', { hello: 'world' })
  // }, 1000);
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
  socket.on('disconnect', function () {
    console.log('disconnect1: ' + socket.id);
  });
});

// setInterval(function () {
//   console.log(arr.map(socket => socket.connected).join(','));
// }, 3000);

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