#include <iostream>
using namespace std;

float getAverage (int* arr, int size) {
    int sum = 0;
    float avg;
    for(int i = 0; i < size; i++) {
        sum = sum + arr[i];
    }
    avg = sum / size;
    return avg;
}

int main () {
    int nums[] = {1, 2, 3, 4};
    float average = getAverage(nums, 4);

    cout << "average is " << average << endl;

    return 0;
}