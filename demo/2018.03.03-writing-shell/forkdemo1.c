#include <unistd.h>
#include <stdio.h>

int main ()
{
	int ret_from_fork, mypid;
	
	mypid = getpid();

	printf("Before: my pid is %d \n", mypid);

	ret_from_fork = fork();

	sleep(1);

	printf("After: my pid is %d, fork() says %d \n", getpid(), ret_from_fork);

	return 0;
}