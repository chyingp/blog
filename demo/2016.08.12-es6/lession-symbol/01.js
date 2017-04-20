// 例子1：新的原始数据类型：symbol
{
    let s1 = Symbol('foo');
    let s2 = Symbol('bar');

    console.log(s1);  // Symbol(foo)
    console.log(s2);  // Symbol(bar)
}

// 例子2：如果参数是object，就会先调用 toString() 获得字符串表示...
{
    let obj = {
        toString () {
            return 'this is obj'
        }
    };

    let s = Symbol(obj);
    console.log(s);  // Symbol(this is obj)
}

// 例子3：参数仅仅是 symbol 的描述，即使相同的参数，返回的 symbol 也是不同的
{
    let s1 = Symbol('foo');
    let s2 = Symbol('foo');

    console.log(s1);  // Symbol(foo)
    console.log(s2);  // Symbol(foo)

    console.log(s1 === s2);  // false
}