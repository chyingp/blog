api.c代码如下，跟普通的c代码的差异在于：

1. 引入了`emscripten.h`依赖
2. 通过`EMSCRIPTEN_KEEPALIVE`将需要暴露给nodejs调用的API包裹起来。

```c
#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void sayHi() {
  printf("Hi!\n");
}
EMSCRIPTEN_KEEPALIVE

int daysInWeek() {
  return 7;
}
```

编译命令如下，通过`-o`指定编译生成的文件是`api.js`。

```
emcc api.c -o api.js
```

然后，在app.js中，调用api模块。可以有如下两种方式调用。

* 方式一：通过`_sayHi()`调用（注意方法名称前加了下划线）
* 方式二：通过`ccall("sayHi")`调用

```js
var cmodule = require('./api');

cmodule._sayHi();
cmodule.ccall("sayHi");
```