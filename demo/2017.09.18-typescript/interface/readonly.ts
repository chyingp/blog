interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = {x: 10, y: 20};
point.x = 30; // error TS2540: Cannot assign to 'x' because it is a constant or a read-only property.