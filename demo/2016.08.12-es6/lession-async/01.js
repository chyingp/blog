// 基础例子：读取文件
var fs = require('fs');
var readFile = (filepath) => new Promise((resolve, reject) => {
    fs.readFile(filepath, {encoding: 'utf8'}, (error, content) => {
        if(error) { reject(error); }
        else { resolve(content); }
    });
});

var run = async function() {
    var tx1 = await readFile('./01.txt');
    var tx2 = await readFile('./02.txt');

    console.log(tx1);  // content: 01.txt
    console.log(tx2);  // content: 02.txt
};

run();  //　运行：node --harmony 01.js