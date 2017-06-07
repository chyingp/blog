#include <iostream>
#include <string>
using namespace std;

int main () {
    string str1 = "hello ";
    string str2 = "world";
    string str3;
    int len;

    str3 = str2;
    cout << str3 << endl;  // world

    str3 = str1 + str2;
    cout << str3 << endl;  // hello world

    len = str3.size();
    cout << len << endl;  // 11
    
    return 0;
}