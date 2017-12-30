#include "math.h"
#include <iostream>
using namespace std;

int main (int argc, char* argv[]) {
  double a = 20;
  double b = 10;

  cout << "a + b =" << DynamicMath::add(a, b) << endl;

  return 0;
}