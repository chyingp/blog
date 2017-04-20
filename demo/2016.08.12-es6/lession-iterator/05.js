// 例子：跟 yield 结合
{
    let makeIterator = function * () {
        yield 1;
        yield * [2, 3, 4];
        yield 5;
    };

    let it = makeIterator();
    console.log( it.next() );
    console.log( it.next() );
    console.log( it.next() );
    console.log( it.next() );
    console.log( it.next() );
    console.log( it.next() );

    // { value: 1, done: false }
    // { value: 2, done: false }
    // { value: 3, done: false }
    // { value: 4, done: false }
    // { value: 5, done: false }
    // { value: undefined, done: true }
}