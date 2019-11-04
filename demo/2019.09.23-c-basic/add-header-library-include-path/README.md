## 编译说明

cd library
gcc -c match.c # 生成math.o
ar -crv libmath.a math.o # 生成静态链接库

cd ..
gcc -L./library -I./include -lmath main.c -o main # 生成可执行文件

## 参数说明

```
# -L 新增的库文件搜索路径
# -I 新增的头文件搜索路径
# -l 链接的库
gcc -L./library -I./include -lmath main.c -o main # 生成可执行文件
```