#include <iostream>
#include "./namespace.h"

using namespace NAME_SPACE_A;

int main () {
    std::cout << "NAME_SPACE_A.count = " << count << std::endl;
    std::cout << "NAME_SPACE_B.count = " << NAME_SPACE_B::count << std::endl;
    return 0;
}