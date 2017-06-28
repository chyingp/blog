#include <iostream>
using namespace std;
 
// 第一个命名空间
namespace first_space{
   void first(){
      cout << "first_space:first" << endl;
   }
   void first2(){
      cout << "first_space:first2" << endl;  
   }
}

// 注意，这里没有 namespace
using first_space::first;

int main ()
{
   first();
   
   // 此时，first2 没有定义，去掉下面注释编译会出错
   // first2();  
 
   return 0;
}