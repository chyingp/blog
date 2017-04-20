// 例子：symbol 属性获取
{
    let gender = Symbol('gender');    
    let obj = {
        nick: 'chyingp',
        [gender]: 'man'
    };

    console.log(obj[gender]);  // man
    console.log(obj.nick);  // chyingp

    // symbol 属性无法通过 for...in 遍历出来
    for(let key in obj) console.log(key);
    // nick

    // 通过 Object.getOwnPropertySymbols 获取 symbol 类型的属性
    let ownPropertySymbols = Object.getOwnPropertySymbols(obj);
    console.log(ownPropertySymbols);  // [ Symbol(gender) ]

    // Object.keys() 无法获取 symbol 类型的属性
    console.log(Object.keys(obj));  // [ 'nick' ]

    // 通过 Reflect.ownKeys() 获取所有属性，包括普通的属性、symbol 属性
    console.log(Reflect.ownKeys(obj));  // [ 'nick', Symbol(gender) ]
}