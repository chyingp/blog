api.cpp代码如下：

* 引入了头文件`emscripten/bind.h`
* 通过`EMSCRIPTEN_BINDINGS`来将接口暴露出来。

```c
#include <emscripten/bind.h>

using namespace emscripten;

float lerp(float a, float b, float t) {
    return (1 - t) * a + t * b;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("lerp", &lerp);
}

```

运行如下命令：

```bash
emcc api.cpp --bind -o api.js
```

app.js如下：

```javascript
var api = require('./api');
var ret = api.lerp(1, 2, 0.5)
console.log('lerp result is %', ret);
```

运行，输出如下：

```bash

```