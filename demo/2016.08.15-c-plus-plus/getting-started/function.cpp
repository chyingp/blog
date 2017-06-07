#include <iostream>
using namespace std;

// 基础：函数声明+定义
int getMax (int a, int b); 

int main () {
    int a = 10, b = 20;
    int max = getMax(a, b);

    cout << "max is " << max << endl;
    return 0;    
}

int getMax (int a, int b) 
{
    return a >= b ? a : b;
}