#include <time.h>
#include <stdio.h>

int fib(int x) {
  if (x < 2) {
    return 1;
  } else {
    return fib(x - 1) + fib(x - 2);
  }
}

int main() {
  clock_t start_t, end_t;;

  start_t = clock();

  long long result = fib(45);

  end_t = clock();

  double total_t = (double)(end_t - start_t) / CLOCKS_PER_SEC;

  printf("Result: %lld", result);
  printf("Total time taken by CPU: %f\n", total_t  );
  return 1;
}