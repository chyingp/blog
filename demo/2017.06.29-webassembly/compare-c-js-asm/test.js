function MyModule (stdlib, foreign, buffer) {
  "use asm";

  var exp = stdlib.Math.exp;
  var log = stdlib.Math.log;
  var values = new stdlib.Float64Array(buffer);

  function logSum(start, end) {
    start = start|0;
    end = end|0;

    var sum = 0.0, p = 0, q = 0;

    // asm.js forces byte addressing of the heap by requiring shifting by 3
    for (p = start << 3, q = end << 3; (p|0) < (q|0); p = (p + 8)|0) {
      sum = sum + +log(values[p>>3]);
    }

    return +sum;
  }

  function geometricMean(start, end) {
    start = start|0;
    end = end|0;

    return +exp(+logSum(start, end) / +((end - start)|0));
  }

  return { geometricMean: geometricMean };

}

// function fast_fib_module(stdlib, foreign, heap) {
//   "use asm";

//   function fib(n) {
//     n = n|0;
    
//     if (n >>> 0 < 3) {
//       return 1|0;
//     }
    
//     return (fib((n-1)|0) + fib((n-2)|0))|0;
//   }

//   return fib;
// }