// 例子：串行 vs 并行
let readFile = function (filepath, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('file content of %s', filepath);
        }, delay);
    });
};

let example1 = function () {
    let title = 'example 01';    
    let run = async function () {
        console.time(title);
        let r1 = await readFile ('./01.txt', 1000);
        let r2 = await readFile ('./02.txt', 2000);
        console.timeEnd(title);
    };
    console.log('%s started', title);
    run();
};

let example2 = function () {
    let title = 'example 02';
    let run = async function () {
        console.time(title);       
        let [r1, r2] = await Promise.all([
            readFile ('./01.txt', 1000),
            readFile ('./02.txt', 2000)
        ]);
        console.timeEnd(title);
    };

    console.log('%s started', title);
    run();
};

example1 ();
example2 ();

// example 02: 2001.600ms
// example 01: 3005.224ms