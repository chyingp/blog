// 例子：async 内部的返回值，会成为 .then(callback) 的参数

// 例子：返回一个字符串，作为 .then(callback) 的参数 
{
    let run = async function () {
        return 'success';
    };

    run().then(console.log);  // success
}

// 例子：下面两段代码分别演示了错误处理的两种场景：
// 场景1：async 里 return new Error(msg) -> error 当作一个普通的返回值，类型是Error，在 .then() 里处理
// 场景2：async 里 throw new Error(msg) -> 抛出异常，在 .catch() 里处理
{
    let run1 = async function () {
        return new Error('error occurred');
    };

    run1()
        .then(function (e) {            
            console.log('got error and handle in .then(): %s', e.message);
        })
        .catch(function (e) {
            console.log('got error and handle in .catch(): %s', e.message);
        });  
    // got error and handle in .then(): error occurred

    let run2 = async function () {
        throw new Error('error occurred');
    };

    run2()
        .then(function (e) {            
            console.log('got error and handle in .then(): %s', e.message);
        })
       .catch(function (e) {
            console.log('got error and handle in .catch(): %s', e.message);
        });

    // got error and handle in .catch(): error occurred    
}

// breakLine('例子3：失败回调 -> 通过return new Error(msg)返回异常');
