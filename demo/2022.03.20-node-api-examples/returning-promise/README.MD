## 需求场景

调用如下：

```
const addon = require('bindings')('addon');

addon.add(10, 20).then(result => {
    console.log(`result is ${result}`);
});
```
## 创建Promise实例

可通过`Napi::Promise::Deferred::New`创建Promise实例。官方文档见[这里](https://github.com/nodejs/node-addon-api/blob/main/doc/promises.md)。

```
Napi::Promise::Deferred deferred = Napi::Promise::Deferred::New(info.Env());
```

修改Promise实例的状态，比如：

```
deferred.Resolve(result);
```

返回Promise实例：

```
return deferred.Promise();
```

## 完整代码

```
Napi::Value Add(const Napi::CallbackInfo& info) {
  uint32_t num1 = info[0].As<Napi::Number>().Uint32Value();
  uint32_t num2 = info[1].As<Napi::Number>().Uint32Value();
  Napi:Number result = Napi::Number::New(info.Env(), num1 + num2);

  Napi::Promise::Deferred deferred = Napi::Promise::Deferred::New(info.Env());
  deferred.Resolve(result);

  return deferred.Promise();
}
```