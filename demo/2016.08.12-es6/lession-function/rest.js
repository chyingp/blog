// 例子
function add (...args) {
    let total = 0;

    for(var val of args) {
        total += val;
    }

    return total;
}

console.log( add(1, 2, 3, 4) );  // 10

// 例子
function sort_1 () {
    return Array.prototype.slice.call(arguments).sort();
}

function sort_2 (...args) {
    return args.sort();
}

console.log( sort_1(4, 1, 3, 2) );  // [ 1, 2, 3, 4 ]
console.log( sort_2(4, 1, 3, 2) );  // [ 1, 2, 3, 4 ]

// 例子：数组方法也可以用在 items 上
function push (arr, ...items) {
    items.forEach(function(item){
        arr.push(item);
    });
    return arr;
}
console.log( push([1], 2, 3, 4) );  // [ 1, 2, 3, 4 ]


// 例子： ...items 这样的参数，只能作为函数的最后一个参数
// 下面的例子会报错：SyntaxError: Rest parameter must be last formal parameter
// function illegalFunc (arr, ...items, item) {
//     items.forEach(function(item){
//         arr.push(item);
//     });
//     arr.push(item);
//     return arr;
// }

// illegalFunc([1], 2, 3, 4)

// 例子：length 不包括 ...items 参数
function getFuncLength (arr, ...items) {
    // ...
}
console.log( getFuncLength.length );  // 1

// 例子：
{
    let arr = [1, 2, 3];
    console.log(arr);  // [ 1, 2, 3 ]
    console.log(...[1, 2, 3]);  // 1 2 3
}

// 例子：将 数组 变成参数序列
function push_2 (arr, ...items) {
    arr.push(...items);
    return arr;
}

console.log( push_2([1], ...[2, 3, 4]) );  // [ 1, 2, 3, 4 ]

function add_2 (x, y) {
    return x + y;
}
console.log( add_2(...[2, 3]) );  // 5

// 例子：替代数组的apply方法

