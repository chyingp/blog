// Task sink in node.js
// Binds PULL socket to tcp://localhost:5558
// Collects results from workers via that socket.

var zmq  = require('zmq')
  , receiver = zmq.socket('pull');

var started = false
  , i = 0
  , label = "Total elapsed time";

receiver.on('message', function() {
  // wait for start of batch
  if (!started) {
    console.time(label);
    started = true;
    console.log('started');

  // process 100 confirmations
  } else {
    i += 1;
    // process.stdout.write(i % 10 === 0 ? ':' : '.');
    process.stdout.write(i + '\n');
    if (i === 100) {
      console.timeEnd(label);
      receiver.close();
      process.exit();
    }
  }
});

receiver.bindSync("tcp://*:5558");