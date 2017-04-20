// 箭头函数的注意点

// 1、函数体内的 this 指向定义时绑定的作用域，而不是运行时所在的作用域
// 2、箭头函数不能作为构造函数（没有自己的this）
// 3、不可以使用arguments对象（可以用...rest替代)
// 4、不可以使用yield命令，因此箭头函数不能用作Generator函数。


// 注意点：箭头函数内部的this，绑定定义时所在的作用域
var id = 10;
var foo  = function () {
    setTimeout(() => {
        console.log(this.id);
    }, 50);
};
foo.call({id: 5});  // 5

var bar = function () {
    setTimeout(function(){
        console.log(this.id);
    }, 50);
};
bar.call({id: 20});  // 10（备注：在浏览器里是10，在node里是undefined）

// 例子：
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);  // 3
setTimeout(() => console.log('s2: ', timer.s2), 3100);  // 0

// 例子：事件绑定的时候用箭头函数
var handler = {
    init: function () {
        document.getElementById('btn').addEventListener('click', (evt) => this.handleClick(evt), false);
    },
    handleClick: function (evt) {
        // 这里的this指向handler
    }
};

// 例子：不能作为构造函数
{
    let Foo = () => 3;
    try{
        new Foo()
    }catch(e){
        console.log(e.message);  // Foo is not a constructor
    }
}

// 例子：不可以使用arguments （没有自己的arguments，这里的arguments实际上是外层函数的）
{
    let foo = function () {
        setTimeout(() => {
            console.log(arguments);
        }, 50);
    };
    foo([1, 2, 3]);  // { '0': [ 1, 2, 3 ] }
}

// 例子：绑定this（ES7的提案）
{
    let foo = {
        nick: 'foo'
    };
    let bar = {
        nick: 'bar',
        greet: function () {
            console.log(this.nick);
        }
    };
    bar.greet();  // bar
    bar.greet.bind(foo)();  // foo
    // foo::bar.greet();  // ES7里
}