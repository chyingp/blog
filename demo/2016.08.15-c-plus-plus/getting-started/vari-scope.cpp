/*
变量作用域：
1、局部变量：
2、全局变量：
*/
#include <iostream>
using namespace std;

int globalVari;  // 全局变量
int localVari;  // 全局变量，会被 main 内部的 局部变量覆盖

void func () {
    localVari = 20;
    printf("localVari from func() %i", localVari);
}

int main () {
    // 局部变量
    int localVari = 10;
    printf("localVari from main() %i \n", localVari);

    // 全局变量
    globalVari = 20;
    printf("globalVari from main() %i \n", globalVari);

    func();
    
    return 0;    
}

// localVari from main() 10
// globalVari from main() 20
// localVari from func() 20