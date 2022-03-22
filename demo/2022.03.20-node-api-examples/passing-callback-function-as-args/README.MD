## 参数为回调函数

如下代码所示：

```
const addon = require('bindings')('addon');

function printResult(result) {
    console.log(`result is ${result}`);
};

const result = addon.add(10, 20, printResult);
```

## 调用传入的回调函数

同步调用可以用`Call`方法，有多种调用方式，这里采用最简单的调用方式。具体可参考 [官方文](https://github.com/nodejs/node-addon-api/blob/main/doc/function.md#call)。

```
info[2].As<Napi::Function>().Call({result});
```

## 完整代码

```
Napi::String Method(const Napi::CallbackInfo& info) {
  uint32_t num1 = info[0].As<Napi::Number>().Uint32Value();
  uint32_t num2 = info[1].As<Napi::Number>().Uint32Value();

  Napi::Number result = Napi::Number::New(info.Env(), num1 + num2);
  
  info[2].As<Napi::Function>().Call({result});

  // 如果要改变this，如下代码所示：
  // Napi::Env env = info.Env();
  // info[2].As<Napi::Function>().Call(env.Global(), {result});
}
```