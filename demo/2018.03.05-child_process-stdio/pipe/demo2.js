const child_process = require('child_process');
const spawn = child_process.spawn;

const child = spawn('ls', ['1.txt', '2.txt'], {
  stdio: 'pipe' // 默认
});

// 通过pipe，将子进程的标准输出 打印到 父进程的 标准输出
child.stdout.pipe(process.stdout);

// 通过pipe，将子进程的标准错误输出 打印到 父进程的 标准错误输出
child.stderr.pipe(process.stderr);