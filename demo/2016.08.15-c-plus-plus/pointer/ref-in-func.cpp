#include <iostream>
using namespace std;

// 传引用
void getMax (int a, int b, int& result) {
    result = a >= b ? a : b;
} 

int main () {
    int small = 10;
    int big = 30;
    int result;
    
    getMax(small, big, result);

    cout << "result: " << result << endl; // result: 30

    return 0;
}
