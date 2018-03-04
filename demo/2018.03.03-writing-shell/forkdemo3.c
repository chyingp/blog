#include <unistd.h>
#include <stdio.h>

int main ()
{
	int fork_rv; // 即便对 fork_rv 赋初始值，子进程里，fork_rv 也是0
	
	printf("Before: my pid is %d \n", getpid());

	fork_rv = fork();

	if (fork_rv == -1)
		perror("fork");
	else if (fork_rv == 0)
		printf("I am the child, my pid is %d \n", getpid());
	else
		printf("I am the parent, my pid is %d \n", getpid());

	return 0;
}