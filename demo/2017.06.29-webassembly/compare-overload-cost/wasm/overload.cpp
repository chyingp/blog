#include <iostream>
#include <ctime>
#include <chrono>
using namespace std;

int add (int a, int b) 
{
	int ret = a + b;
	return ret;
}

string add (string a, string b)
{
	string ret = a + b;
	return ret;
}

int main () 
{	
	std::chrono::high_resolution_clock::time_point t1 = std::chrono::high_resolution_clock::now();
	
	int int_arr[2] = {1000, 1000};
	string str_arr[2] = {"hello", "world"};

	int times = 10000;
	int r;
	for(int i = 0; i < times; i++)
	{
		if(i % 2 == 0){
			add(int_arr[0], int_arr[1]);
		}else {
			add(str_arr[0], str_arr[1]);
		}
	}
		
	std::chrono::high_resolution_clock::time_point t2 = std::chrono::high_resolution_clock::now();
	std::chrono::duration<double, std::milli> time_span = t2 - t1;

	std::cout << "It took me " << time_span.count() << " milliseconds.";
	return 0;
}