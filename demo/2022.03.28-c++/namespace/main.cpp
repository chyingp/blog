#include <iostream>
#include "./namespace.h"

using namespace std;

int main () {
    cout << "NAME_SPACE_A.count = " << NAME_SPACE_A::count << endl;
    cout << "NAME_SPACE_B.count = " << NAME_SPACE_B::count << endl;
    return 0;
}