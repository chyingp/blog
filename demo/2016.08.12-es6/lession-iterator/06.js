// 字符串是 类数组，也部署了 iterator 接口
{
    let str = 'hi';
    console.log( str[Symbol.iterator] );  // [Function: [Symbol.iterator]]

    let it = str[Symbol.iterator]();
    console.log( it.next() );  // { value: 'h', done: false }
    console.log( it.next() );  // { value: 'i', done: false }
    console.log( it.next() );  // { value: undefined, done: true }
}