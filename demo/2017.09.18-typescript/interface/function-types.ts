interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
  let result: boolean = src.indexOf(sub) !== -1;
  return result;
}