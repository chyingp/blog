#include <unistd.h>
#include <stdio.h>

int main ()
{
	// printf("my pid is %d \n", getpid());
	
	fork();
	fork();
	fork();

	printf("my pid is %d \n", getpid());

	return 0;
}