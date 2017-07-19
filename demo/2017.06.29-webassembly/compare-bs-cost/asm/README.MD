编译：

```bash
emcc --memory-init-file 0 --bind -o bs.js -O3 bs.cpp
```

备注：100w次运算的情况下，比js版本的还耗时间，怀疑是参数判断、类型判断（类型判断为函数调用）的损耗造成的

```js
(function(throwBindingError,invoker,fn,runDestructors,retType,classParam,argType0,argType1,argType2,argType3,argType4
/*``*/) {
return function NHCalcCall(arg0, arg1, arg2, arg3, arg4) {
if (arguments.length !== 5) {
throwBindingError('function NHCalcCall called with ' + arguments.length + ' arguments, expected 5 args!');
}
var arg0Wired = argType0.toWireType(null, arg0); // double
var arg1Wired = argType1.toWireType(null, arg1); // double
var arg2Wired = argType2.toWireType(null, arg2); // double
var arg3Wired = argType3.toWireType(null, arg3); // double
var arg4Wired = argType4.toWireType(null, arg4); // double
var rv = invoker(fn, arg0Wired, arg1Wired, arg2Wired, arg3Wired, arg4Wired);
var ret = retType.fromWireType(rv);
return ret;
}

})
```