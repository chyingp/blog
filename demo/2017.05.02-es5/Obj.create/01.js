var Shape = function (x, y) {
    this.x = x || 10;
    this.y = y || 10;
};

Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
};

var Rectangle = function (width, height) {
    Shape.call(this);
    this.width = width;
    this.height = height;
};

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.showArea = function () {
    console.log(`area: %s`, this.width * this.height);
};

Rectangle.prototype.showPos = function () {
    console.log(`x: %s, y: %s`, this.x, this.y);
};

var rect = new Rectangle(20, 10);
rect.showArea();
rect.showPos();

// area: 200
// x: 10, y: 10