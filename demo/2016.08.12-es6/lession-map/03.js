let map = new Map();

map.set('nick', 'chyingp')
    .set('gender', 'man');

// 例子：map 转 数组
{
    let arr = [...map];
    console.log(arr);  // [ [ 'nick', 'chyingp' ], [ 'gender', 'man' ] ]
}

// 例子：数组 转 map
{
    let map = new Map([
        ['nick', 'chyingp'],
        ['gender', 'man']
    ]);
    console.log(map);  // Map { 'nick' => 'chyingp', 'gender' => 'man' }
}