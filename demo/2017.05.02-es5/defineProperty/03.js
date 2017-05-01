// writable
// 1、false不可修改，true可修改
// 2、默认是false
// 3、值不变，但不会报错
var obj = {};

var setValue = function (target, key, value) {
    try {
        target[key] = value;
    }catch(e){
        console.log(e.message);
    }
};

Object.defineProperty(obj, 'nick', {
    enumerable: true,
    writable: false,
    value: 'chyingp'
});

Object.defineProperty(obj, 'school', {
    enumerable: true,
    writable: true,
    value: 'sysu'
});

Object.defineProperty(obj, 'gender', {
    enumerable: true,
    value: 'man'
});

for(let key in obj) {
    console.log('key: %s, value: %s', key, obj[key]);
}

// key: nick, value: chyingp
// key: school, value: sysu
// key: gender, value: man

setValue(obj, 'nick', 'casper');
setValue(obj, 'school', 'zhongda');
setValue(obj, 'gender', 'woman');

for(let key in obj) {
    console.log('key: %s, value: %s', key, obj[key]);
}

// key: nick, value: chyingp
// key: school, value: zhongda
// key: gender, value: man




