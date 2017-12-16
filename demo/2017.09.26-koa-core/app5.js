async function bar () {
    var ret = await new Promise((resolve) => setTimeout(() => resolve('bar'), 1000));
    return ret;
}

async function foo () {
    let ret = await bar();
    console.log(ret);
}

foo();