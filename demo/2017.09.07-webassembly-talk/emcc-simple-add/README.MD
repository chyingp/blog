首先，编译出模块simple.wasm

```
emcc -o simple.html simple.c -lm -s WASM=1 -s EXPORTED_FUNCTIONS="['_add']"
```

然后，在simple.html中定义myLogic，并添加到Module.postRun中。

```javascript
var myLogic = function () {
    var add = Module.cwrap(
        'add', 
        'number',
        ['number', 'number']
    );
    var sum = add(10, 20);
    console.log(sum);  // 30
};

// Module.postRun = [myLogic];
```

然后就可以愉快的调用count方法了。

通过下面查看下过

```
python -m SimpleHTTPServer 8081 
```