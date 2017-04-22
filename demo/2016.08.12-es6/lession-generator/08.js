var gen = function * () {
    try {
        yield console.log('a');
    }catch(e){
        console.log('内部捕获', e);
    }
    yield console.log('b');
    yield console.log('c');
};

var i = gen();
i.next(); // a

i.throw('e');
// 内部捕获 e
// b

i.next();
// c
