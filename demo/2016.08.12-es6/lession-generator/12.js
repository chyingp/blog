let breakLine = () => console.log('\n=== another example ===\n');

{
    let foo = function * () {
        yield 2;
        yield 3;
        return 4;
    };

    let bar = function * () {
        yield 1;
        let v = yield * foo();
        console.log('return value of foo() is : %s', v);
        yield 5;
    };

    let b = bar();
    console.log( b.next() );
    //{ value: 1, done: false }

    console.log( b.next() );
    // { value: 2, done: false }

    console.log( b.next() );
    // { value: 3, done: false }
    
    console.log( b.next() );
    // return value of foo() is : 4
    // { value: 5, done: false }

    console.log( b.next() );
    // { value: undefined, done: true }
}

breakLine();

{
    function* genFuncWithReturn() {
        yield 'a';
        yield 'b';
        return 'The result';
    }
    
    function* logReturned(genObj) {
        let result = yield* genObj;
        console.log(result);
    }

    for(let v of logReturned(genFuncWithReturn())){
        console.log(v);
    }

    // a
    // b
    // The result
}