// 例子：ES5的“类”写法
{
    let Point = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Point.prototype.toString = function () {
        return `(x = ${this.x}, y = ${this.y})`;
    };

    let p = new Point(2, 3);
    console.log(p.toString());  // (x = 2, y = 3)
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
    }

    let p = new Point(2, 3);
    console.log(p.toString());  // (x = 2, y = 3)

    console.log(typeof Point);  // function
    console.log(Point === Point.prototype.constructor);  // true
}