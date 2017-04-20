// iterator 实现：借助 generator
{
    let myIterator = {
        [Symbol.iterator]: function * () {
            yield 1;
            yield 2;
        }
    };
    
    console.log( [...myIterator] );  // [ 1, 2 ]

    for(let v of myIterator) {
        console.log(v);
    }
    // 1
    // 2
}