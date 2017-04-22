let breakLine = () => console.log('\n=== another example ===\n');

{
    let foo = function *  () {
        yield 'x';
        yield 'y';
    };

    let bar = function *  () {
        yield 'a';
        foo();
        yield 'b';
    };

    let b = bar();
    console.log( b.next() ); // { value: 'a', done: false }
    console.log( b.next() ); // { value: 'b', done: false }
    console.log( b.next() ); // { value: undefined, done: true }
}

breakLine();

// 例子：yield * bar()，前面没有加 * ，相当于：
// 1、返回了一个迭代器对象
// 2、迭代器对象自动调用 for...of 循环返回内容
{
    let foo = function *  () {
        yield 'x';
        yield 'y';
    };

    let bar = function *  () {
        yield 'a';
        yield * foo();
        yield 'b';
    };

    let b = bar();
    console.log( b.next() ); // { value: 'a', done: false }
    console.log( b.next() ); // { value: {}, done: false }
    console.log( b.next() ); // { value: 'b', done: false }
    console.log( b.next() ); // { value: 'undefined', done: true }
    console.log( b.next() ); // { value: 'undefined', done: true }
}

breakLine();

// 例子：yield bar()，前面没有加 * ，相当于返回了一个迭代器对象，但是迭代器对象还需要自己调用 .next() 来执行
{
    let foo = function *  () {
        yield 'x';
        yield 'y';
    };

    let bar = function *  () {
        yield 'a';
        yield foo();
        yield 'b';
    };

    let b = bar();
    console.log( b.next() ); // { value: 'a', done: false }
    console.log( b.next() ); // { value: 'x', done: false }
    console.log( b.next() ); // { value: 'y', done: false }
    console.log( b.next() ); // { value: 'b', done: false }
    console.log( b.next() ); // { value: 'undefined', done: true }
}

breakLine();

{
    let inner = (function * () {
        yield 1;
        yield 2;
    })();

    let outter = (function * () {
        yield 'x';
        yield * inner;
        yield 'y';
    })();

    for(let value of outter) {
        console.log(value);
    }

    // x
    // 1
    // 2
    // y    
}
