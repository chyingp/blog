#include <iostream>
using namespace std;

int main () {
    // 枚举默认是 0、1、2
    enum color {red, blue, green};
    color c = red;
    cout << c << endl;

    // 指定值 0、10、11
    enum size {big, middle = 10, small};
    size s = middle;
    cout << s << endl;  // 10
    s = small;  
    cout << small << endl;  // 11

    // 相当于最后同时声明了变量 fw
    enum fontWeight {bold, normal, thin} fw;
    fw = normal;
    cout << fw << endl;
}