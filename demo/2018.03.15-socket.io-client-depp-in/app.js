var io = require('socket.io-client');
function run () {
  var socket = io('http://localhost:3000', {autoConnect: true});
  socket.on('news', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: 'data' });
  });
  
  socket.on('connect', function () {
    console.log('client: 连接上');
  });
  
  socket.on('connect_error', function () {
    console.log('client: connect_error');
  });
  
  socket.on('error', function (errorMessage) {
    console.log('client: error, ' + errorMessage);
  });
  // socket.io.open();

  setTimeout(() => {
    socket.emit('news', {nick: 'chyingp'})
  }, 3000)
}
run();
// run();


// var socket = io({});
// socket.on('connect', function(){});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){});