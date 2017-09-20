// 枚举
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["YELLOW"] = 1] = "YELLOW";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
console.log(Color.RED); // 0
console.log(Color.YELLOW); // 1
var Fruits;
(function (Fruits) {
    Fruits[Fruits["APPLE"] = 3] = "APPLE";
    Fruits[Fruits["ORANGE"] = 4] = "ORANGE";
    Fruits[Fruits["BANANA"] = 5] = "BANANA";
})(Fruits || (Fruits = {}));
;
console.log(Fruits.APPLE); // 3
console.log(Fruits.ORANGE); // 4
var Size;
(function (Size) {
    Size[Size["SMALL"] = 0] = "SMALL";
    Size[Size["MIDDLE"] = 1] = "MIDDLE";
    Size[Size["HIGH"] = 2] = "HIGH";
})(Size || (Size = {}));
;
var middleSize = Size.MIDDLE;
console.log(middleSize); // 1
var middleName = Size[1];
console.log(middleName); // 1
