// 例子一：返回多个值
function getInfo () {
    return {
        nick: 'chyingp',
        gender: 'man'
    }
}

let {nick, gender} = getInfo();
console.log(nick);  // chyingp
console.log(gender);  // man

function getArr () {
    return ['x', 'y'];
}

let [x, y] = getArr();
console.log(x);  // x
console.log(y);  // y

// 例子二：变量交换
{
    let x = 'x';
    let y = 'y';
    [x, y] = [y, x];
    console.log(x);  // y
    console.log(y);  // x
}

// 例子三：函数参数
// 用处1：当传入的参数是object时，方便指定属性名
// 用处2：指定默认值
var Express = function ({host = '127.0.0.1', port = '3000'} = {}) {
    this.host = host;
    this.port = port;
};

var app = new Express({port: '8000'});
console.log(app.host);  // 127.0.0.1
console.log(app.port);  // 8000

// 例子4：
let items = [
    {label: 'one', value: '1'},
    {label: 'two', value: '2'}
];

// label: one, value: 1
// label: two, value: 2
items.forEach(({label, value}) => console.log('label: %s, value: %s', label, value));

// 例子5：
const {title, init} = require('./header');
console.log(title);  // 标题
console.log(init);  // [Function]