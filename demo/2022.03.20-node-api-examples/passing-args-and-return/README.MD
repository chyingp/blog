## 参数获取

根据 [CallbackInfo](https://github.com/nodejs/node-addon-api/blob/main/doc/callbackinfo.md) 的说明，可以通过 `info[index]` 来获取参数，并通过 `AS<template>()` 来转换类型

比如：

```
uint32_t num1 = info[0].As<Napi::Number>().Uint32Value();
```
## 返回值

参考对应类型的官方文档就行，比如创建`Napi::Number`类型，代码如下，其他数据类型类似：

```
Napi:Number result = Napi::Number::New(info.Env(), num1 + num2);
```

## 完整代码

一个比较简单版本的Add方法，接收两个类型为`Napi::Number`的入参，然后返回它们的值，如下：

```
Napi::Number Add(const Napi::CallbackInfo& info) {
  uint32_t num1 = info[0].As<Napi::Number>().Uint32Value();
  uint32_t num2 = info[1].As<Napi::Number>().Uint32Value();
  Napi:Number result = Napi::Number::New(info.Env(), num1 + num2);
  
  return result;
}
```