#include <stdio.h>

int main (int ac, char * av[])
{
  printf("Number of args: %d, Args are: \n", ac);

  int i;
  for (i = 0; i < ac; i++)
    printf("args[%d] %s \n", i, av[i]);

  fprintf(stderr, "This message is sent to stderr . \n");  

  return 0;
}