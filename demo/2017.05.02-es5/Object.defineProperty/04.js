// configurable：属性是否可删除，属性的descriptor是否可修改
// 1、false：属性不可删除，descriptor不可修改；true：属性可删除，descriptor可修改；
// 2、false时，strict模式下删除 或 修改descriptor会报错
// 2、默认是false

'use strict';

var obj = {};

var delProp = function (target, key) {
    try {
        delete target[key];
    }catch(e){
        console.log(e.message);
    }
};

var modPropDesc = function (target, key, desc) {
    try {
        Object.defineProperty(target, key, desc);
    }catch(e){
        console.log(e.message);
    }
};

Object.defineProperty(obj, 'nick', {
    value: 'chyingp',
    configurable: false
});

Object.defineProperty(obj, 'school', {
    value: 'sysu',
    configurable: true
});

Object.defineProperty(obj, 'gender', {
    value: 'man'
});

delProp(obj, 'nick');
delProp(obj, 'school');
delProp(obj, 'gender');

// Cannot delete property 'nick' of #<Object>
// Cannot delete property 'gender' of #<Object>

modPropDesc(obj, 'nick', { enumerable: true });
modPropDesc(obj, 'school', { enumerable: true });
modPropDesc(obj, 'gender', { enumerable: true });

// Cannot redefine property: nick
// Cannot redefine property: gender