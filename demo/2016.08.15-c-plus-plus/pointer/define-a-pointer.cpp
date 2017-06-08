#include <iostream>
using namespace std;

int main () {
    int num = 10;
    int *p = &num;

    cout << "num的值是 " << num << endl;
    cout << "num的指针地址是 " << p << endl;
    cout << "num的值是 " << *p << endl;

    // num的值是 10
    // num的指针地址是 0x7fff5c36f5e8
    // num的值是 10  

    return 0;
}
