const child_process = require('child_process');
const spawn = child_process.spawn;

const child = spawn('ls', ['1.txt', '2.txt'], {
  stdio: 'inherit'
});

console.log(child.stdout == null); // true