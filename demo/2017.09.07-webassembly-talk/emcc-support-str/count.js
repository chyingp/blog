var count = Module.cwrap(
    'count', 
    'number',
    ['string']
);
var num = count('hello');
console.log(num);  // 5