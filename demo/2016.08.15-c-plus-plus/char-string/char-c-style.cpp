#include <iostream>
using namespace std;

int main () {
    // char str[3] = {'a', 'b', 'c', '\0'};
    char str[] = "hello";
    cout << str << endl;  // hello
    cout << sizeof(str) << endl;  // 6，包含了末尾隐含的 \0

    // char str1[3] = {'a', 'b', 'c'};
    // cout << str1 << endl;  // abchello

    char str2[4] = {'a', 'b', 'c', '\0'};
    cout << str2 << endl;  // abc

    return 0;    
}
