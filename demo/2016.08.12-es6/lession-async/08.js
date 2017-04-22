// 例子：async 方法中，只要一个 await 状态变成 rejected，后续逻辑就会停止执行，进入 .catch() 中
{
    let run = async function () {
        let r1 = await Promise.resolve('r1');
        console.log('r1: %s', r1);

        let r2 = await Promise.reject(new Error('r2'));
        console.log('r2: %s', r2);

        let r3 = await Promise.resolve('r3');
        console.log('r3: %s', r3);
    };

    run()
        .then(function () {
            console.log('done');
        })
        .catch(function (e) {
            console.log('catch error: %s', e.message);
        });

    // r1: r1
    // catch error: r2        
}