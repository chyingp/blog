// 例子：set类似数组，但是元素不会重复
{
    let set = new Set();
    [1, 2, 2, 3, 3, 3, 4].forEach((v) => set.add(v));

    for(let v of set) {
        console.log(v);
    }
    // 1
    // 2
    // 3
    // 4
}

// 例子：初始化set，参数是数组
{
    let set = new Set([1, 2, 2, 3, 3, 3, 4]);
    console.log(set.size);  // 4
    console.log(...set);  // 1 2 3 4
}

// 例子：利用set，去除重复元素
{
    let arr = [1, 2, 2, 3, 3, 3, 4];
    arr = [...new Set(arr)];
    console.log(arr);  // [ 1, 2, 3, 4 ]
}

// 例子：对set来说，5 跟 '5' 是不同的元素（类似用 === 进行比较）
{
    let arr = [1, 2, '2', 3, '3', 3, 4];
    arr = [...new Set(arr)];
    console.log(arr);  // [ 1, 2, '2', 3, '3', 4 ]
}

// 例子：例外，在set中，NaN 与 NaN 视为相等（NaN !== NaN）
{
    let arr = [1, 2, '2', 3, '3', 3, 4, NaN, NaN];
    arr = [...new Set(arr)];
    console.log(arr);  // [ 1, 2, '2', 3, '3', 4, NaN ]
    console.log(NaN === NaN);  // false
}

// 例子：不同的对象，在set中是不一样的
{
    let obj = {nick: 'chyingp'};
    let obj2 = {nick: 'chyingp'};
    let set = new Set([obj, obj2]);
    console.log(set);  // Set { { nick: 'chyingp' }, { nick: 'chyingp' } }
}