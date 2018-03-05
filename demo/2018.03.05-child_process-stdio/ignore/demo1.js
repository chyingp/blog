const child_process = require('child_process');
const spawn = child_process.spawn;

// 设置为ignore，导致
// 1、父进程不会直接打印子进程的标准输出、标准错误输出
// 2、子进程的标准输出、标准错误输出直接丢弃（参考命令 ls 1.txt 2.txt > /dev/null）
const child = spawn('ls', ['1.txt', '2.txt'], {
  stdio: 'ignore' // 等价于 ['ignore', 'ignore', 'ignore']
});

console.log( child.stdout ); // null