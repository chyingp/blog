var g = function * () {
    while(true) {
        yield;
        console.log('内部捕获', e);
    }
};

var i = g();
i.next();

try {
    i.throw('a');
    i.throw('b');
}catch(e){
    console.log('外部捕获', e);
}

// 外部捕获 a