console.log('4');
process.on('message', (m) => {
  console.log('CHILD got message:', m);
});

process.send({ foo: 'bar' });
console.log('5');