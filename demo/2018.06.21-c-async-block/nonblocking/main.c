#include <stdio.h>
#include <fcntl.h>
#include <errno.h>
#include <unistd.h>

int main () {

  char filename[] = "jquery.js";  
  int numToWrite = 0;
  int numWritten = 0;
  int maxRead = 200000;
  char buffer[maxRead + 1];
  char *ptr;

  int fd = open(filename, O_RDONLY);
  int writeFd = STDOUT_FILENO;

  if (fd == -1) {
    perror("open");
    return -1;
  }
  fprintf(stderr, "file opened, fd: %d \n", fd);

  numToWrite = read(fd, buffer, maxRead);

  fprintf(stderr, "numToWrite: %d", numToWrite);

  int count = 0;
  int flags = fcntl(writeFd, F_GETFL);//先获取原先的flags
  fcntl(writeFd, F_SETFL, flags | O_NONBLOCK);//设置fd为阻塞模式  

  ptr = buffer;

  while (numToWrite > 0) {
    errno = 0;
    numWritten = write(writeFd, ptr, numToWrite);
    fprintf(stderr, "numWritten = %d, errno = %d \n", numWritten, errno);

    if (numWritten > 0) {
      // fprintf(stderr, "numWritten = %d, errno = %d \n", numWritten, errno);
      count++;
      ptr += numWritten;
      numToWrite -= numWritten;      
    }
  }
  
  fcntl(writeFd, F_SETFL, flags&~O_NONBLOCK);  

  close(fd);

  return 0;
}