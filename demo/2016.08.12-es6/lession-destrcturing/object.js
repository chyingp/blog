let {foo, bar} = {foo:'foo', bar:'bar'}
console.log(foo)  // foo
console.log(bar)  // bar

// 备注：对象的解构赋值，变量名需要跟对象的属性名保持一致
let {baz} = {foo:'foo', bar:'bar'}
console.log(baz)  // undefined

// 变量名 跟 对象属性名 不一样的例子
{
    let {foo: baz} = {foo: 'foo', bar: 'bar'}
    console.log(baz)  // foo

    let {first: f, last: l} = {first: 'first', last: 'last'}
    console.log(f)  // first
    console.log(l)  // last
}

{
    // 等同于 let {foo} = {foo: 'foo'}
    // 意思：先找到 对象 foo（左） 属性 对应的值，然后赋值给 foo 变量（右）
    let {foo: foo} = {foo: 'foo'}
    console.log(foo)  // foo
}

{
    let foo;
    // {foo} = {foo: 'foo'}  // 这种写法不允许
    ({foo} = {foo: 'foo'})
}

{
    let obj = {
        x: [
            'hello',
            {y: 'y'}
        ]
    }

    let {x: [s, {y}]} = obj
    console.log(s)  // hello
    console.log(y)  // y
    // console.log(x)  // ReferenceError: x is not defined
}

{
    let obj = {};
    let arr = [];
    ({foo: obj.foo, bar: arr[0]} = {foo: 'foo', bar: 'bar'});
    console.log(obj.foo);  // foo
    console.log(arr[0]);  // bar
}

// 默认值
{
    let {foo, bar = 'hello'} = {foo: 'foo'};
    console.log(foo); // foo
    console.log(bar); // hello
}

{
    let x;
    // 下面的代码会报错，因为 {x} 外层的大括号，会被解释成代码块
    // {x} = {x: 'x'} 

    // 下面的写法是可以的
    // ({x} = {x: 'x'}）
}