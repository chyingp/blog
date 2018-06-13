console.log('begin');

Promise.resolve()
  .then(() => {
    console.log('promise');
  });
  
process.nextTick(() => {
  console.log('nextTick 01');
  
  process.nextTick(() => {
    console.log('nextTick 02');
    process.nextTick(() => {
      console.log('nextTick 03');
      
    }); 
  });  
});

console.log('end');

/*

node版本：8.9.3
输出如下：

begin
end
nextTick 01
nextTick 02
nextTick 03
promise
*/