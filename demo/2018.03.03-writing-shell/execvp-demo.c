#include <stdio.h>
#include <unistd.h>

int main () {
	char * args[3];
	args[0] = "ls";
	args[1] = "-al";
	args[2] = 0;

	printf("About to exec ls -al \n");

	execvp("ls", args);

	printf("ls is done \n");

	return 0;
}