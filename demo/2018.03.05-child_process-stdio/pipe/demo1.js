const child_process = require('child_process');
const spawn = child_process.spawn;

const child = spawn('ls', ['1.txt', '2.txt'], {
  stdio: 'pipe' // 默认，等价于 ['pipe', 'pipe', 'pipe']
});

child.stdout.on('data', function (data) {
  console.log(`child.stdout: ${data}`);
});

child.stderr.on('data', function (data) {
  console.log(`child.stderr: ${data}`);
});

// 输出如下
// child.stdout: 1.txt
// child.stderr: ls: 2.txt: No such file or directory