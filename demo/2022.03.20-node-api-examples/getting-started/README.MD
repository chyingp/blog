## 环境依赖

* node：14.18.1
* node-gyp：9.0.0

>N-API在8.0.0引入，当时还是实验版本，那会的helloworld例子似乎已经跑不起来了 = =b

## 示例代码

关于各API的定义，可以参考官方文档：https://nodejs.org/api/n-api.html#napi_create_function

源代码：

```
#include <node_api.h>

napi_value HelloMethod (napi_env env, napi_callback_info info) {
    napi_value world;
    napi_create_string_utf8(env, "say hello", 5, &world);
    return world;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;

  napi_value fn;
  status = napi_create_function(env, NULL, 0, HelloMethod, NULL, &fn);
  if (status != napi_ok) return NULL;

  status = napi_set_named_property(env, exports, "hello", fn);
  if (status != napi_ok) return NULL;

  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
```

binding.gyp

```
{
  "targets": [
    {
      "target_name": "hello",
      "sources": [ "./src/hello.cc" ]
    }
  ]
}
```

## 编译

```
node-gyp rebuild
```

## 运行

```
node app.js

# 输出：say hello
````

