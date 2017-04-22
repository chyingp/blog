// 例子：async 方法中，await 状态变成 rejected，如果加了 try..catch 进行异常处理，后续逻辑可以继续正常执行
{
    let run = async function () {

        try {
            let r1 = await Promise.reject('r1');
            console.log('r1: %s', r1);

            let r2 = await Promise.reject(new Error('r2'));
            console.log('r2: %s', r2);
        }catch(e){
            console.log('got error in async: %s', e.message);
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

    // got error in async: undefined
    // r3: r3
    // done      
}