// 如果 Generator 函数中没有 yield ，就可以看作一个普通的暂停函数
function * foo () {
    console.log('hello');
}

let f = foo();

setTimeout( () => f.next(), 1000);