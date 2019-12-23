const heapdump = require('heapdump');
const arr = [];
const num = 1000;

setInterval(() => {
    for(let i = 0; i < num; i++) {
        arr.push({nick: '程序猿小卡', age: 18});
    }
}, 1000);

console.log(`process started, pid is ${process.pid}`);

// 比如 pid 为 81912，运行下面命令，输出内存快照，并通过 chrome devTool 进行分析
// kill -USR2 81912