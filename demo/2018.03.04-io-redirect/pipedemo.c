#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

int main ()
{
  int len, i, apipe[2];
  char buf[BUFSIZ];

  if (pipe(apipe) == -1)
  {
    perror("could not make a pipe");
    exit(1);
  }
  printf("Got a pipe! It is file descriptor %d and %d. \n", apipe[0], apipe[1]);

  while (fgets(buf, BUFSIZ, stdin))
  {
    len = strlen(buf);

    if (write(apipe[1], buf, len) != len)
    {
      perror("writing to pipe");
      break;
    }

    for (i = 0; i < len; i++)
      buf[i] = 'x';

    len = read(apipe[0], buf, BUFSIZ);
    if (len == -1)
    {
      perror("reading from pipe");
      break;
    }

    if (write(1, buf, len) != len)
    {
      perror("writing to stdout");
      break;
    }
  }

  return 0;
}