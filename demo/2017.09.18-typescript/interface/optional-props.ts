interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare (config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: 'red', area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let square = createSquare({color: 'blue', width: 20});
console.log(square); // { color: 'blue', area: 400 }