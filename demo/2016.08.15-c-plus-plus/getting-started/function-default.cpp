#include <iostream>
using namespace std;

// 基础：函数声明+定义
int getMax (int a, int b = 20) {
    return a >= b ? a : b;  
}

int main () {
    int a = 20;
    int max = getMax(a);

    cout << "max is " << max << endl;
    return 0;    
}