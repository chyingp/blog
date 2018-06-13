console.log('begin');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('resolve');
  });

console.log('end');

/*
node版本：8.9.3
输出如下：
begin
end
resolve
setTimeout
*/