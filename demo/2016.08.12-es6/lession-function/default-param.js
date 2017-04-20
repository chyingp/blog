var move = function(x, y) {
    if(typeof y === 'undefined') {
        y = 0
    }
    console.log('move x:%s y:%s', x, y)
};

move(1, 2);  // move x:1 y:2
move(3);  // move x:3 y:0

move = function (x = 0, y = 0) {
    console.log('move x:%s y:%s', x, y)    
};

move(1, 2);  // move x:1 y:2
move(3);  // move x:3 y:0    

// 惰性求值
let x = 99;
var cal = function (p = x + 1) {
    console.log(p);
};
cal();  // 100

x = 100;
cal();  // 101


function fetch (url, {method = 'GET', headers = {}} = {}) {
    console.log('method: %s, url: %s', method, url);
}

fetch('http://www.baidu.com');  // method: GET, url: http://www.baidu.com
fetch('http://www.baidu.com', {method: 'POST'});  // method: POST, url: http://www.baidu.com

// 例子：多个参数，如果前面的参数设置默认值，那么，该参数实际上无法省略，除非显示传入 undefined，否则会报错
// 建议：带默认值的参数，最好放在最后
function func (x = 5, y) {
    console.log('x:%s, y:%s', x, y);
}

func();  // x:5, y:undefined
func(1);  // x:1, y:undefined
func(undefined, 2);  // x:5, y:2
// func(, 2);  // 直接报错

// 例子：带默认参数后，length属性将发生变化 -> 返回没有默认值的参数个数
console.log( (function (x, y) {}).length );  // 2
console.log( (function (x, y = 1) {}).length );  // 1
console.log( (function (x, y, z = 1) {}).length );  // 2
console.log( (function (...args) {}).length );  // 0