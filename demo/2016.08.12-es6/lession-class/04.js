class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    move (x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }

    // 一般用下划线标志私有方法，但实际上实例还是可以访问到这个方法
    _moveX (x) {
        this.x = this.x + x;
    }
}

let p = new Point(10, 20);
p.move(10, 10);
p._moveX(10, 10);
