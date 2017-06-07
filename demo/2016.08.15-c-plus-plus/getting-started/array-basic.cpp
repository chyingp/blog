#include <iostream>
using namespace std;

// 基础入门例子
int main () {
    int nums[3] = {1, 2, 3};
    string sizes[3] = {"small", "medium", "large"};

    cout << "nums[0] is " << nums[0] << endl;
    cout << "sizes[1] is " << sizes[1] << endl;

    cout << "sizeof(nums) is " << sizeof(sizes) << endl;  // 72

    return 0;    
}