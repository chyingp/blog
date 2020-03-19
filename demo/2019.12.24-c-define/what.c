#include <stdio.h>

#define COUNT(M) M * M               //定义有参宏

int main()
{
    int x = 6;
    printf("COUNT = %d\n", COUNT(x + 1));// 输出结果： COUNT = 13
    return 0;
}