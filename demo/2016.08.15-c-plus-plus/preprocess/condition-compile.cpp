#include <iostream>
using namespace std;

#define DEBUG

int main () {
  #ifdef DEBUG
    cout << "DEBUG is defined." << endl;
  #endif

  #if 0
    cout << "It will not be printed" << endl;
  #endif

  return 0;
}