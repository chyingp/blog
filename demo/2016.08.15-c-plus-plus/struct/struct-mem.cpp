#include <iostream>
using namespace std;

struct Book {
    int num1;
    int num2;
};

int main () {

	Book book;
	book.num1 = 10;
	book.num2 = 20;
	
	int *p1 = &book.num1;
	int *p2 = &book.num2;

    int size = sizeof(int);

    cout << "pointer address of p1 === " << p1 << endl;
    cout << "pointer address of p2 === " << p2 << endl;

    cout << "pointer address of p1 + 1 === " << (p1 + 1) << endl;


    cout << "value of book.num2 is " << book.num2 << endl;

    *p2 = 30;

    cout << "value of book.num2 is " << book.num2 << endl;

    *(p1 + 1) = 40;  // p1是int类型，p1 + 1，相当于指针偏移一个int的存储空间（比如4个字节）

    cout << "value of book.num2 is " << book.num2 << endl;

    // p = p + 4;

    // *p = 20;
    
    // cout << "sizeof(int) === " << size << endl;
    // cout << "pointer address of p === " << p << endl;
    // cout << "value of book.num2 is " << book.num2 << endl;

    return 0;
}
