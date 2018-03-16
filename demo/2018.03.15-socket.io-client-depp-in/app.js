var io = require('socket.io-client');
var socket = io('http://localhost:3000');
// var socket = io({});
socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});