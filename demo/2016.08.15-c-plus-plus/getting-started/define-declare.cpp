#include <iostream>
using namespace std;

// 声明
void func();

// 定义
void func () {
    cout << "call func()" << endl;
}

int main () {
    func();
    return 0;    
}