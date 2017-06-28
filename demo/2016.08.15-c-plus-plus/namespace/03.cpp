#include <iostream>
using namespace std;
 
// 第一个命名空间
namespace first_space{
   void first(){
      cout << "first_space:first" << endl;
   }
}
// 第二个命名空间
namespace second_space{
   void second(){
      cout << "second_space:second" << endl;
   }
}

using namespace first_space;
using namespace second_space;

int main ()
{
 
   // 调用第一个命名空间中的函数
   first();
   
   // 调用第二个命名空间中的函数
   second();

   // first_space:first
   // second_space:second   
 
   return 0;
}
