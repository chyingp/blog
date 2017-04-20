// 例子：简单的箭头函数
{
    let f = function(v){
        return v;
    };
    console.log( f(3) );  // 3
}

{
    let f = v => v;
    console.log( f(3) );  // 3
}

// 例子：不需要参数 or 多个参数
{
    let f = () => 3;
    console.log( f() );  // 3

    let g = (x, y) => x + y;
    console.log( g(2, 3) );  // 5
}

// 例子：代码块多于1条语句，用{}括起来，并且使用 return 返回
{    
    let f = (x, y) => {
        if(x > y) {
            return x;
        }else {
            return y;
        }
    };
    console.log( f(1, 2) );  // 2
    console.log( f(3, 2) );  // 3
}

// 例子：如果返回的是个object，需要用()括起来，因为{}会被解释成代码块
{
    let f = (nick, gender) => ({nick: nick, gender: gender });
    console.log( f('chyingp', 'man') );  // { nick: 'chyingp', gender: 'man' }
}

// 例子：跟解构结合
{
    let f = ({nick, gender}) => console.log('nick:%s, gender:%s', nick, gender);
    f({nick: 'chyingp', gender: 'man'});  // nick:chyingp, gender:man
}

// 例子：结合map等方法，实现更简洁
{
    let newArr = [1, 2, 3].map(v => 2 * v);
    console.log(newArr);  // [ 2, 4, 6 ]

    // 旧写法
    newArr = [1, 2, 3].map(function(v){
        return 2 * v;
    });
    console.log(newArr);  // [ 2, 4, 6 ]
}