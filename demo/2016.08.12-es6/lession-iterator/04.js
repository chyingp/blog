// 一种数据结构，只要部署了iterator接口，就称这种数据结构是可遍历的（iterable）
// 具体的说，只要有 Symbol.iterator 这个属性，就认为是“可遍历“的
// ES6中，默认部署了 Symbol.iterator 的，有 Array、Set、Map、其他类数组对象
// 备注：Symbol.iterator 是个内置的 symbol 实例，obj[Symbol.iterator] 是个遍历器函数

console.log(Symbol.iterator);  // Symbol(Symbol.iterator)

console.log([][Symbol.iterator]);  // [Function: values]

// console.log( Array.prototype[Symbol.iterator] === Array.prototype.values );

// 例子：
{
    let colors = ['red', 'yellow', 'blue'];
    let it = colors[Symbol.iterator]();
    console.log( it.next() );  // { value: 'red', done: false }
    console.log( it.next() );  // { value: 'yellow', done: false }
    console.log( it.next() );  // { value: 'blue', done: false }
    console.log( it.next() );  // { value: undefined, done: true }

    for(let color of colors) {
        console.log(color);
    }
    // red
    // yellow
    // blue
}

// 例子：
{
    let obj = {
        count: 2,
        [Symbol.iterator] () {
            let that = this;
            return {
                next: function () {
                    return that.count >= 0 ? {value: that.count--, done: false} : {value: 'done', done: true};
                }
            };
        }
    };
    let it = obj[Symbol.iterator]();
    console.log( it.next() );  // { value: 2, done: false }
    console.log( it.next() );  // { value: 1, done: false }
    console.log( it.next() );  // { value: 0, done: false }
    console.log( it.next() );   // { value: 'done', done: true }   
}

// 例子：类数组部署 Symbol.iterator 方法
{
    let arrObj = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };

    for(let v of arrObj) {
        console.log(v);
    }

    // a
    // b
    // c
}