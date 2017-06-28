#include <iostream>
using namespace std;

int main () {
	// sizeof(char) is 1
	cout << "sizeof(char) is " << sizeof(char) << endl;

	char c = "a";

	printf("c is %c", c);
	printf("c is %d", c);

	return 0;
};