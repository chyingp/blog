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

### 通过nodejs调用

app.js如下：

```javascript
var api = require('./api');
var ret = api.lerp(1, 2, 0.5)
console.log('lerp result is %s', ret);
```

运行，输出如下：

```bash
with-embind git:(master) ✗ node app.js
lerp result is 1.5
```

### 在web中调用

此外，也可以在web中调用。demo.html如下

```html
<!doctype html>
<html>
  <script src="api.js"></script>
  <script>
    console.log('lerp result: ' + Module.lerp(1, 2, 0.5));
  </script>
</html>
```

启动服务器

```bash
python -m SimpleHTTPServer 8081
```

在浏览器里访问 http://127.0.0.1:8081/demo.html，控制台输出如下

```
lerp result: 1.5
```