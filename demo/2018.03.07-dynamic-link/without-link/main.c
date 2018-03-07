#include <stdio.h>

int sum (int a, int b)
{
  return a + b;
}

int main () {
  int a = 10;
  int b = 20;
  int ret = sum(a, b);
  printf("sum of %d + %d == %d \n", a, b, ret);
  return 0;
}

// gcc main.c -o main
// ./main