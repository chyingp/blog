// 对比：setImmediate vs process.nextTick
// setImmediate() is designed to execute a script once the current poll phase completes.
// 

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