#include <iostream>
#include <string>

using namespace std;

template <class T>
class Stack {
	public:
		T items[10];
		int index;
		
		Stack () {
			index = 0;
		}

		void push (T a) {
			items[index++] = a;
			// cout << items[index - 1] << endl;
		}

		void print (int i) {
			cout << items[i] << endl;
		}
};

int main () {
	Stack<int> s;
	s.push(10);
	s.push(20);

	s.print(0);
	s.print(1);

	return 0;
}