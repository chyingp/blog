// 例子：async 方法中，await 状态变成 rejected，如果加了 try..catch 进行异常处理，后续逻辑可以继续正常执行
{
    let run = async function () {
        let r1 = await Promise.resolve('r1');
        console.log('r1: %s', r1);

        try {
            let r2 = await Promise.reject(new Error('r2'));
            console.log('r2: %s', r2);
        }catch(e){
            console.log('r2 error: %s', e.message);
        }        

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