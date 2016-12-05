const cp = require('child_process');
const n = cp.fork(`${__dirname}/child.js`);

console.log('1');

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

console.log('2');

n.send({ hello: 'world' });

console.log('3');