// 与 setImmediate-vs-setTimeout-in-io-callback.js 进行对比

console.log('begin');

setImmediate(() => {
  console.log('setImmediate');
}, 0);

setTimeout(() => {
  console.log('setTimeout');
}, 0);

console.log('end');

/*
node版本：8.9.3
输出如下：
begin
end
setTimeout
setImmediate
*/