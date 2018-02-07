#include <iostream>
#include <string>

using namespace std;

template <class T>
T add (T a, T b) {
	return a + b;
}

int main () {
	int ia = 10;
	int ib = 10;
	cout << add(ia, ib) << endl;

	float fa = 10.1;
	float fb = 10.2;
	cout << add(fa, fb) << endl;

	string sa = "hello ";
	string sb = "world";
	cout << add(sa, sb) << endl;

	return 0;
}