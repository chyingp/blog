function MyModule () {
	"use asm";

	function fib(x) {
	  x = x|0;
	  if ((x|0) < (2|0)){
	    return +1;
	  } else {
            return +fib((x -1)|0) + +fib((x - 2)|0);
	  }
	}

	return {
		fib: fib
	};
}