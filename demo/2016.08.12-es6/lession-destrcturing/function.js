// 例子一：
function add ([x, y]) {
    console.log(x);  // 1
    console.log(y);  // 2
    return x + y;
}

add([1, 2]);

// 例子二：
[[1, 2], [3, 4]].map(function([a, b]){
    console.log(a);  // 1 或 3
    console.log(b);  // 2 或 4
    return a + b
});

// 例子三：默认值
function move ({x = 0, y = 0} = {}) {
    console.log(`move x to ${x}, y to ${y}`);
}

move({x: 1, y: 2})  // move x to 1, y to 2
move({x: 3})  // move x to 3, y to 0
move({y: 4})  // move x to 0, y to 4
move({})  // move x to 0, y to 0
move()  // move x to 0, y to 0

// 例子四：
function move2 ({x, y} = {x: 0, y: 0}) {
    console.log(`move x to ${x}, y to ${y}`);
}

move2({x: 1, y: 2});  // move x to 1, y to 2
move2({x: 3});  // move x to 3, y to undefined
move2({y: 4});  // move x to undefined, y to 4
move2({});  // move x to undefined, y to undefined
move2();  // move x to 0, y to 0

// 例子五：
let arr = [1, undefined, 2].map((x = 'default') => x); 
console.log(arr);  // [ 1, 'default', 2 ]