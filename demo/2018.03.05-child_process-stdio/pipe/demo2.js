const child_process = require('child_process');
const spawn = child_process.spawn;

const child = spawn('ls', ['1.txt', '2.txt'], {
  stdio: 'pipe' // 默认
});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);