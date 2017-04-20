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

// 例子：替代数组的apply方法 （比如求数组里的最大值）
{
    let max = Math.max(100, 10, 1000);
    console.log( max );  // 1000

    max = Math.max.apply(Math, [100, 10, 1000]);
    console.log( max );  // 1000

    max = Math.max(...[100, 10, 1000]);
    console.log( max );  // 1000
}

// 例子：将 数组2 添加到 数组1 的末尾
{
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    Array.prototype.push.apply(arr1, arr2);
    console.log(arr1);  // [ 1, 2, 3, 4 ]

    let arr3 = [1, 2];
    let arr4 = [3, 4];
    arr3.push(...arr4);
    console.log(arr3);  // [ 1, 2, 3, 4 ]
}

// 例子：合并数组
{
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let arr3 = arr1.concat(arr2);
    console.log(arr3);  // [ 1, 2, 3, 4 ]

    let arr4 = [1, 2];
    let arr5 = [3, 4];
    let arr6 = [...arr4, ...arr5];
    console.log(arr6);  // [ 1, 2, 3, 4 ]

    // 合并多个数组
    let arr7 = [...[1], ...[2, 3, 4], ...[5, 6]];
    console.log(arr7);  // [ 1, 2, 3, 4, 5, 6 ]
}

// 例子：与结构赋值结合
{
    let [first, second, ...items] = [1, 2, 3, 4, 5];
    console.log(first);  // 1
    console.log(second);  // 2
    console.log(items);  // [ 3, 4, 5 ]
}