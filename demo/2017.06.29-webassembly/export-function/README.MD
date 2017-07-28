## 例子

源码如下，引用`<emscripten/emscripten.h>`，同时在需要暴露的函数前加上`EMSCRIPTEN_KEEPALIVE`

```c
#include <emscripten/emscripten.h>

EMSCRIPTEN_KEEPALIVE
int add (int a, int b)
{
    return a + b;
}

int minus (int a, int b)
{
    return a - b;
}
```
 
编译脚本：

```bash
emcc simple.c -o simple.html -s WASM=1
```

然后在就可以调用`_add`方法了。

```javascript
instance.exports._add(1, 2);  // 3
```

## 原理分析

在`emscripten.h`中，有如下定义。可以看到`EMSCRIPTEN_KEEPALIVE`代表了`__attribute__((used))`，其作用是告诉编译器，即使这个变量/函数没有被用到，也要保留下来。

```c
#define EMSCRIPTEN_KEEPALIVE __attribute__((used))
```

## 相关链接

 __attribute__((used)) variable attribute
http://www.keil.com/support/man/docs/armcc/armcc_chr1359124983230.htm

GNU C __attribute__ 机制简介
http://afreez.blog.51cto.com/59057/7351

问题：

1. 可否去掉`_add`的下划线
2. 可否不加`EMSCRIPTEN_KEEPALIVE`标记