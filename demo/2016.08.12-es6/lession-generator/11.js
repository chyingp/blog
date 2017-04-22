let breakLine = () => console.log('\n=== another example ===\n');

{
    let foo = function * () {
        yield * ['a', 'b', 'c'];
    };
    
    let f = foo();
    console.log( f.next() );  // { value: 'a', done: false }    
}

breakLine();

{
    let foo = function * () {
        yield ['a', 'b', 'c'];
    };
    
    let f = foo();
    console.log( f.next() );  // { value: [ 'a', 'b', 'c' ], done: false }
}

breakLine();

{
    let foo = function * () {
        yield 'hello';
        yield ['a', 'b', 'c'];
        yield function * () {};
        yield * 'hello';
    };
    
    let f = foo();
    console.log( f.next() );  // { value: 'hello', done: false }
    console.log( f.next() );  // { value: [ 'a', 'b', 'c' ], done: false }
    console.log( f.next() );  // { value: [Function], done: false }
    console.log( f.next() );  // { value: 'h', done: false }
    console.log( f.next() );  // { value: 'e', done: false }
}