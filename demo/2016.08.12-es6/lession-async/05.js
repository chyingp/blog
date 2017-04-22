// 例子：除了 promise 之外的返回类型
var readFile = function (filepath) {
    return filepath;
};

var run = async function () {
    var r1 = await readFile('./01.txt');
    var r2 = await readFile('./01.txt');

    console.log('r1 is: %s', r1);
    console.log('r2 is: %s', r2);
};

run();

// r1 is: ./01.txt
// r2 is: ./01.txt