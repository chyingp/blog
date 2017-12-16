// async function add (a, b) {
//     var o1 = await a;
//     var o2 = await b;
//     console.log(o1 + o2);
// }

// add(10, 20);

// async function foo () {
//     return 'foo';
// }

// async function bar () {
//     // let ret = await foo();
//     let ret = await foo;
//     console.log(ret);
// }

// bar();

function bar () {
    return new Promise((resolve) => {
        setTimeout(() => resolve('bar'), 2000);
    });
}

async function foo () {
    var ret = await bar();
    return ret;
}

async function run () {
    var ret = await foo();
    console.log(ret);
};

run();