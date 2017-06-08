#include <iostream>
using namespace std;

int main () {
    int arr[3] = {1, 2, 3};
    int len = sizeof(arr) / sizeof(int);
    int *ptr;

    for(int i = 0; i < len; i++) {
        cout << "数组索引遍历：arr[i] = " << arr[i] << endl;
    }

    ptr = arr;

    for(int j = 0; j < len; j++, ptr++) {
        cout << "指针地址+1遍历：*ptr = " << *ptr << endl;
    }

    ptr = arr;

    while (ptr <= &arr[len - 1]) {
        cout << "指针地址大小比较遍历：*ptr = " << *ptr << endl;
        ptr++;
    }

    return 0;
}
