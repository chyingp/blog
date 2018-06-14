// 与 setImmediate-vs-setTimeout 进行对比
const fs = require('fs');

console.log('begin');

fs.readFile(__filename, () => {
  console.log('readFile callback');

  setImmediate(() => {
    console.log('setImmediate');
  }, 0);
  
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
});

console.log('end');

/*
node版本：8.9.3
输出如下：

begin
end
readFile callback
setImmediate
setTimeout
*/