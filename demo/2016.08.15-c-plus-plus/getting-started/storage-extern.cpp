#include <iostream>
#include "storage-extern-write.cpp"

int count;
extern void my_write();

int main () {
    count = 10;
    my_write();
    // std::cout << count << std::endl;
    return 0;
}