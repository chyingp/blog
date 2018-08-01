// c 形式
#include <stdio.h>
#include <stdlib.h>

void fun(int k, char c)
{
    printf("this is fun2 call:%d %c\n", k, c);
}

//fun1 函数的参数为double，返回值为函数指针void(*)(int, char)
void (*fun1(double d))(int, char)
{
    printf("%f\n",d);
    return fun;
}

int main()
{
    void (*p)(int, char) = fun1(3.33);
    p(1, 'a');
    return 0;
}