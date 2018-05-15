#include <stdio.h>
#include "./math.h"

int main () {
	int a = 10;
	int b = 20;
	int c = sum(a, b);

	printf("ret is %d", c);

	return 0;
}