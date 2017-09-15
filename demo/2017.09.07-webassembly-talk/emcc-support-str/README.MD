首先，编译出模块simple.wasm

```
emcc -o simple.html simple.c -lm -s WASM=1 -s EXPORTED_FUNCTIONS="['_count']"
```

然后，在simple.html中定义myLogic，并添加到Module.postRun中。

```javascript
var myLogic = function () {
    var count = Module.cwrap(
        'count', 
        'number',
        ['string']
    );
    var num = count('hello');
    console.log(num);  // 5
};

// Module.postRun = [myLogic];
```

然后就可以愉快的调用count方法了。