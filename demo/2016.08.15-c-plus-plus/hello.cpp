#include <iostream>
using namespace std;

template<typename T>
T Min(T a, T b)
{
   return a > b ? b : a;
} 

template <class T> T Max(T a, T b)
{
   return a > b ? a : b;
}


int main ()
{
 
   cout << Min(1, 2) << endl;
   cout << Min("a", "b") << endl;

   cout << Max(1, 2) << endl;
   cout << Max("a", "b") << endl;

   return 0;
}