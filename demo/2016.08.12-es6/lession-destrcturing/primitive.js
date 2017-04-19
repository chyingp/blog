// 备注：如果右边不是对象或者数组，那么，先转成对象

{
    let {toString} = true;
    console.log(toString);  // [Function: toString]
}

{
    let {toString} = 123;
    console.log(toString);  // [Function: toString]
}

{
    // let {toString} = undefined;  // 报错：TypeError: Cannot match against 'undefined' or 'null'.
    // let {toString} = null;  // 报错：TypeError: Cannot match against 'undefined' or 'null'.
}