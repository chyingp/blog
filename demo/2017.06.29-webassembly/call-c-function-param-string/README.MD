## 例子

源码如下，`test`函数接受字符串指针作为参数，并返回该字符串的长度。

```c
#include <string.h>

unsigned int test (char *ptr)
{
    return strlen(ptr);
}
```
 
编译脚本：

```bash
emcc simple.c -o simple.html -s WASM=1 -s EXPORTED_FUNCTIONS="['_test']"
```

在js中测试下。

```javascript
var test = Module.cwrap(
    'test', 
    'number',
    ['string']
);
var num = test('hello');
console.log(num);  // 5
```
