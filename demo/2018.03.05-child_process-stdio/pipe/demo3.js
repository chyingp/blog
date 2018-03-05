const child_process = require('child_process');
const spawn = child_process.spawn;

const child = spawn('grep', ['-n', 'java'], {
  stdio: 'pipe' // 默认
});

const text = `
javascript
php
java
`;

// 通过子进程的标准输入通道写入内容
child.stdin.end(text);

// 将子进程的标准输出，pipe到父进程的标准输出
child.stdout.pipe(process.stdout);

// 输出
// 2:javascript
// 4:java

