#include <iostream>
using namespace std;

// 不存在空引用。引用必须连接到一块合法的内存。
// 一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象。
// 引用必须在创建时被初始化。指针可以在任何时间被初始化

int main () {
    int num = 10;
    int& ref = num;

    cout << "num: " << num << endl; // 10   
    cout << "ref: " << ref << endl; // 10

    num = 20;
    cout << "num: " << num << endl; // 20
    cout << "ref: " << ref << endl; // 20

    ref = 30;
    cout << "num: " << num << endl; // 30
    cout << "ref: " << ref << endl; // 30

    return 0;
}
