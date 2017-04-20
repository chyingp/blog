// 例子：ES5的“类”写法
{
    let Point = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Point.prototype.toString = function () {
        return `(x = ${this.x}, y = ${this.y})`;
    };

    Point.prototype.move = function () {};

    let p = new Point(2, 3);
    console.log(p.toString());  // (x = 2, y = 3)

    for(let func in p) {
        console.log(func);
    }
    // x
    // y
    // toString
    // move
}

// 例子：ES6的例子 （可以看过语法糖）
{
    class Point {
        constructor (x, y) {
            this.x = x;
            this.y = y;
        }

        toString () {
            return `(x = ${this.x}, y = ${this.y})`;
        }

        move () {}
    }

    let p = new Point(2, 3);
    console.log(p.toString());  // (x = 2, y = 3)

    console.log(typeof Point);  // function
    console.log(Point === Point.prototype.constructor);  // true

    // 备注：ES6方式定义的方法，都是不可枚举的（不同于ES5）
    for(let func in p) {
        console.log(func);
    }
    // x
    // y
    
    // 例子：class方式定义的构造函数，如果没有new，不允许执行（ES5可以）
    try {
        Point();
    }catch(e){
        console.log(e.message);  // Class constructor Point cannot be invoked without 'new'
    }
}