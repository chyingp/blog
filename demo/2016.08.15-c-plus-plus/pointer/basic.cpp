#include <iostream>
using namespace std;

int main () {
    int num = 10;
    char str[] = "hello";

    cout << "num的指针地址是 " << &num << endl;
    cout << "str的指针地址是 " << &str << endl;

    // num的指针地址是 0x7fff575b25f8
    // str的指针地址是 0x7fff575b25fs    

    return 0;
}
