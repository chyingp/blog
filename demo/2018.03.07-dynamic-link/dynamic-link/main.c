#include <stdio.h>
#include "mymath.h"

int main () {
  int a = 10;
  int b = 20;
  int ret = sum(a, b);
  printf("sum of %d + %d == %d \n", a, b, ret);
  return 0;
}