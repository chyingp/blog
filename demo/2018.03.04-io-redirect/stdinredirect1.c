#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdlib.h>

int main ()
{
  int fd;
  int charnum = 100;
  char line[charnum];

  fgets(line, charnum, stdin);
  printf("%s", line);

  fgets(line, charnum, stdin);
  printf("%s", line);

  fgets(line, charnum, stdin);
  printf("%s", line);

  close(0);

  fd = open("./user.txt", O_RDONLY);
  if (fd != 0)
  {
    fprintf(stderr, "Could not open data as fd 0 \n");
    exit(1);
  }

  fgets(line, charnum, stdin);
  printf("%s", line);

  fgets(line, charnum, stdin);
  printf("%s", line);

  fgets(line, charnum, stdin);
  printf("%s", line);

  return 0;
}