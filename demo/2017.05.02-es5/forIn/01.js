// 1、继承的属性也会被遍历
// 2、遍历顺序无保证
var Shape = function (x, y) {
    this.x = x;
    this.y = y;
};

Shape.prototype.desc = 'nonsense';

var s = new Shape(10, 10);
s.width = 100;

for(var key in s) {
    console.log(`s["%s"] === %s`, key, s[key]);
}

// s["x"] === 10
// s["y"] === 10
// s["width"] === 100
// s["desc"] === nonsense

for(var key in s) {
    if(s.hasOwnProperty(key))
        console.log(`s["%s"] === %s`, key, s[key]);
}

// s["x"] === 10
// s["y"] === 10
// s["width"] === 100