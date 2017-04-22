let breakLine = () => console.log('\n=== another example ===\n');

// 例子：return() 方法
function * gen () {
    yield 1;
    yield 2;
    yield 3;
}

// 例子1：
let g = gen();
console.log( g.next() );
console.log( g.return('foo') ); 
console.log( g.next() ); 

// { value: 1, done: false }
// { value: 'foo', done: true }
// { value: undefined, done: true }

breakLine();

// 例子2：
g = gen();
console.log( g.next() );
console.log( g.return() ); 
console.log( g.next() );

// { value: 1, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }

breakLine();

// 例子3：如果 generator 内部有 finally，那么 .return() 会推迟到 .finally() 执行完
// 注意点如下：
// 1、如果 g.return() 调用时，generator 尚未执行到 try 里面，那么， try...finally 代码段全部跳过
// 2、如果 g.return() 调用时，generator 已执行到 try 里面，那么，try 里面尚未执行的跳过，finally 里的代码段继续执行
// 3、如果 g.return() 调用时，generator 已执行到 finally 里面，那么，try 里面尚未执行的跳过，finally 里的代码段继
function * bar() {
    yield 1;
    try {
        yield 2;
        yield 3;        
    }finally{
        yield 4;
        yield 5;
        console.log('hello');
    }    
    yield 6;
}

let b = bar();
console.log( b.next() );  // { value: 1, done: false }
console.log( b.next() );  // { value: 2, done: false }
console.log( b.return('bar') );  // { value: 4, done: false }
console.log( b.next() );  // { value: 5, done: false }
console.log( b.next() );  // { value: 'bar', done: true }
console.log( b.next() );  // { value: undefined, done: true }

// 完整输出：
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 4, done: false }
// { value: 5, done: false }
// hello
// { value: 'bar', done: true }
// { value: undefined, done: true }

breakLine();

function * foo() {
    yield 1;
    yield 2;
    try {
        yield 3;
        yield 4;        
    }finally{
        yield 5;
        yield 6;
    }
    yield 7;
}

let f = foo();
console.log( f.next() );
console.log( f.return('foo') );
console.log( f.next() );
console.log( f.next() );

breakLine();

// 输出：
// { value: 1, done: false }
// { value: 'foo', done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }

function * baz () {
    yield 1;
    try {
        yield 2;
    }finally{
        yield 3;
        yield 4;
    }
    yield 5;
};
let z = baz();
console.log( z.next() );  // { value: 1, done: false }
console.log( z.next() );  // { value: 2, done: false }
console.log( z.next() );  // { value: 3, done: false }
console.log( z.return('baz') );  // { value: 'baz', done: true }
console.log( z.next() );  // { value: undefined, done: true }
console.log( z.next() );  // { value: undefined, done: true }

// 输出：
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 'baz', done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }