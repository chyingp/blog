// 例子：.then() 回调
var fs = require('fs');

var getContent = (filepath, delay) => new Promise((resolve, reject) => {
   setTimeout( () => resolve(filepath), delay ) ;
});

var run = async function() {
    var tx1 = await getContent('./01.txt', 3000);
    var tx2 = await getContent('./02.txt', 1000);

    console.log(tx1);  // content: 01.txt
    console.log(tx2);  // content: 02.txt
};

run().then(() => console.log('done'));  //　运行：node --harmony 01.js