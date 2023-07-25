#ifndef _TEST_H_ 
#define _TEST_H_ 
 
#include <string> 
 
// 去掉 extern 会报错，导致 g_name 在 main.cpp 中重复定义
extern std::string g_name; 
void hello(); 
 
#endif 