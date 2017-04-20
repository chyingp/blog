// 例子：错误处理
var fs = require('fs');

var getContent = (filepath, delay, flag) => new Promise((resolve, reject) => {
   setTimeout( () => flag ? resolve(filepath) : reject(new Error('错误')), delay ) ;
});

var run = async function() {
    var tx1;

    try {
        tx1 = await getContent('./01.txt', 1000, false);
        console.log('success: %s', tx1);
    }catch (e) {
        console.log('error: %s', e.message);  // error: 错误
    }
};

run().then(() => console.log('done'));  //　运行：node --harmony 04.js