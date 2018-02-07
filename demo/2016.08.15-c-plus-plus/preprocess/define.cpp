#include <iostream>
using namespace std;

#define PI 3.14

#define SUM(a, b) (a + b)

int main () {
	cout << "Value of PI is: " << PI << endl;
	cout << "Sum of 1 + 3 is: " << SUM(1, 2) << endl;
}

// g++ -E define.cpp > define.p