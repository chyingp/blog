## 例子

源码如下（文本模式），注意

* export：导出方法
* import：导入方法

```wast
(module
  (import "console" "log" (func $log (param i32)))
  (export "test" (func $_Z3addv))
  (func $_Z3addv 
    i32.const 1
    call $log
  )
)
```

编译命令如下，将文本模式编译成二进制模式。

```bash
wast2wasm simple.wast -o simple.wasm
```

js代码如下：

```javascript
var importObject = {
    console: {
        log: console.log
    }
};
fetch('simple.wasm').then(response =>
    response.arrayBuffer()
).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
).then(module =>
    module.instance.exports.test()  // 输出1
);
```