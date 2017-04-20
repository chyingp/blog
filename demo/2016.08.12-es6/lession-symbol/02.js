// 例子1：定义属性、方法
{
    let s = Symbol();
    let b = Symbol();
    let obj = {
        [s] : 'hello',
        [b] (...args) {
            console.log(args);
        }
    };
    console.log(obj[s]);  // hello
    console.log(obj[b](1, 2, 3));  // [ 1, 2, 3 ]
}

// 例子2：定义常量
{    
    let logLevel = {
        DEBUG: Symbol('DEBUG'),
        ERROR: Symbol('ERROR')
    };
    let log = function (level, msg) {
        // ...
    };

    log(logLevel.DEBUG, 'HELLO');
}