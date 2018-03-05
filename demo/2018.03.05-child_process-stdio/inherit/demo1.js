const child_process = require('child_process');
const spawn = child_process.spawn;

const child = spawn('ls', ['1.txt', '2.txt'], {
  stdio: 'inherit'
});

console.log( child.stdout );

// 输出如下：
// ls: 2.txt: No such file or directory
// 1.txt