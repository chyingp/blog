{
    let arr = [1, 2, 3];
    arr.foo = 'foo';

    for(let key in arr) {
        console.log(key);
    }
    // 0
    // 1
    // 2
    // foo    

    for(let value of arr) {
        console.log(value);
    }
    // 1
    // 2
    // 3    
}