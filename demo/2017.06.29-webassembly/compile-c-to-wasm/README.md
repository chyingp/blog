命令如下：

* -s WASM=1：表示要输出wasm文件，如果不指定，默认输出asm.js格式的文件。
* -o hello.html：表示需要输出hello.html来运行我们的代码，包括wasm模块，以及在web页面中运行该wasm模块所需要的编译和初始化的js胶水代码。

```bash
emcc hello.c -s WASM=1 -o hello.html
```

运行http server，然后在浏览器里访问 http://xx.xx.xx.xx:8081/hello.html

```bash
python -m SimpleHTTPServer 8081
```