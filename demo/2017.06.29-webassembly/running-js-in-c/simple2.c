#include <emscripten.h>

int main() {
	int x = EM_ASM_INT({
	  Module.print('I received: ' + $0);
	  return $0 + 1;
	}, 100);
	printf("%d\n", x);
}