// 例子1：解构赋值
{
    let {a, b} = {a: 1, b: 2, c: 3, d: 4};
    console.log(a);  // 1
    console.log(b);  // 2
}

// 例子2：还是解构赋值
// 经测试，在 node 7.0.0 下会报错，目测还不支持这特性，可以用babel转下
// {
//     let {a, b, ...z} = {a: 1, b: 2, c: 3, d: 4};
//     console.log(z);  // { c: 3, d: 4 }
// }

// 例子3：属性的简易表达
{
    let prop = 'bar';
    let func = function () {};
    let obj = {prop, func};
    console.log(obj);  // { prop: 'bar', func: [Function: func] }
}

// 例子4：方法名简写 + 属性名简写 + 变量数姓名
{
    let nick = 'chyingp';
    let key = 'gender';
    let obj = {
        nick,
        [key] : 'man',
        hello () {
            console.log('hello');
        }
    };

    obj.hello();  // hello
    console.log(obj.nick);  // chyingp
    console.log(obj.gender);  // man
}

