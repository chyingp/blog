function * foo () {
    try {
        yield;
    }catch(e) {
        console.log('内部捕获1：%s', e);
    }
    
    console.log('hello');
    
    try {
        console.log('world');
        yield;
    }catch(e) {
        console.log('内部捕获2：%s', e);
    }

    try {
        console.log('world');
        yield;
    }catch(e) {
        console.log('内部捕获3：%s', e);
    }
};

let f = foo();
f.next();

try{
    f.throw('a');
    f.next();
    f.throw('b');
}catch(e){
    console.log('外部捕获：%s', e);
}