var axon = require('axon');
var sock = axon.socket('pull');

sock.connect(3100);

sock.on('message', function(msg){
  console.log(msg.toString());
});
