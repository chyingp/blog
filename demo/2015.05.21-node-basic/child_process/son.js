process.on('message', function(msg) {
  console.log('Son Listen:', msg);
});
process.send({ role: 'son' });