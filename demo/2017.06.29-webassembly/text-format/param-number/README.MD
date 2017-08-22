首先，源码如下：

1. 定义了一个函数，并将该函数导出，导出的函数名为add_one
2. add_one函数接受一个32位整型参数$num，并将 $num + 1 作为返回值，返回值类型也是32位整型；

```
(module
  (func (export "add_one") (param $num i32) (result i32)    
    i32.const 1
    get_local $num
    i32.add
  )
)
```

编译：

```bash
wast2wasm simple.wast -o simple.wasm
```

加载并实例化simple.wasm后，调用导出的add_one方法。

```javascript
fetch('./simple.wasm')
    .then( response => response.arrayBuffer() )
    .then( bytes => WebAssembly.instantiate(bytes) )
    .then( result => result.instance.exports.add_one(10) )
    .then( console.log )
```

启动服务器，并在浏览器里访问 http://127.0.0.1:8081/simple.html，启动脚本如下

```bash
python -m SimpleHTTPServer 8081
```

控制台输出：11
