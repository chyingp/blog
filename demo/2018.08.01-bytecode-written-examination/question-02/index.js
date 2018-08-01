function convertToArray () {
  console.log(Array.prototype.slice.call(arguments, 0));
}

convertToArray('h', 'e', 'l', 'l', 'o'); // [ 'h', 'e', 'l', 'l', 'o' ]