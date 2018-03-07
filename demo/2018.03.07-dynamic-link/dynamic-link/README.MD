
1、首先，编译mymath.c

```bash
gcc -c -fPIC -o mymath.o mymath.c
```

参数说明
* -c：只编译，不链接
* -fPIC：Position Independent Code，生成共享库要求加上这个选项

2、生成共享库

```
gcc -shared -o libmymath.so mymath.o
```

3、编译主程序

```bash
gcc -o main main.c -lmymath -L .
```

-l：库文件的名字
-L：库文件所在的路径

4、运行

```
export LD_LIBRARY_PATH=.
./main
```

这里`export LD_LIBRARY_PATH=.`的目的是，将当前路径，设置为动态链接库的默认搜索路径里。