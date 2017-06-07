#include <iostream>
#include <cstring>
using namespace std;

int main () {
    char str1[15] = "hello ";
    char str2[15] = "world";
    char str3[15];

    strcpy(str3, str2);
    cout << str3 << endl;  // world

    strcat(str1, str2);    
    cout << str1 << endl;  // hello world

    int len = strlen(str1);
    cout << len << endl;  // 11

    return 0;    
}