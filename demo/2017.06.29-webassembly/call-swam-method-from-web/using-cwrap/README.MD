结论：直接编译成了js

源码：

```c
#include <math.h>

extern "C" {

int int_sqrt(int x) {
  return sqrt(x);
}

}
```
 
编译脚本：

```bash
 emcc ./hello_function.cpp -o function.html -s EXPORTED_FUNCTIONS="['_int_sqrt']"  
```

生成的function.html中，可以看到下面资源function.js（直接编译成了js）

```html
<script async="" type="text/javascript" src="function.js"></script>
```

然后，可以加上以下代码

```js
var int_sqrt = Module.cwrap(
    'int_sqrt',  // 方法名
    'number',  // 返回值的类型
    ['number']  // 参数类型
);
```