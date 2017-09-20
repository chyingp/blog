// 枚举
enum Color {RED, YELLOW, BLUE};
console.log(Color.RED); // 0
console.log(Color.YELLOW); // 1

enum Fruits {APPLE = 3, ORANGE, BANANA};
console.log(Fruits.APPLE); // 3
console.log(Fruits.ORANGE); // 4

enum Size {SMALL, MIDDLE, HIGH};
let middleSize: Size = Size.MIDDLE;
console.log(middleSize); // 1

let middleName: string = Size[1];
console.log(middleName); // 'MIDDLE'