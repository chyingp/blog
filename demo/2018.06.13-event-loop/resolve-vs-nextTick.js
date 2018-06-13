console.log('begin');

Promise.resolve()
  .then(() => {
    console.log('promise');
  });
  
process.nextTick(() => {
  console.log('nextTick');
});

console.log('end');