#include <stdio.h>
#include <fcntl.h>

int main () {
  char filename[] = "jquery.js";  
  int numRead = 0;
  int maxRead = 1024;
  char buffer[maxRead + 1];

  int fd = open(filename, O_RDONLY);

  if (fd == -1) {
    perror("open");
    return -1;
  }
  printf("file opened, fd: %d \n", fd);

  while ( (numRead = read(fd, buffer, maxRead)) != 0 ) {
    // printf("numRead: %d, content: %s", numRead, buffer);
    if (numRead == -1) {
      perror("read");
      return -1;
    }

    printf("numRead: %d \n", numRead);
  }
  
  // buffer[numRead] = '\0';

  close(fd);
  return 0;
}