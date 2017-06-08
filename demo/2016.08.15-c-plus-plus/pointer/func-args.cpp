#include <iostream>
#include <ctime>
using namespace std;

void getSeconds (unsigned long *ptr);

int main () {
    // unsigned long sec;
    // getSeconds(&sec);

    unsigned long sec;
    getSeconds(&sec);

    cout << "current seconds is " << sec;

    return 0;
}

void getSeconds (unsigned long *ptr) {
    *ptr = time( NULL );
    return;
}