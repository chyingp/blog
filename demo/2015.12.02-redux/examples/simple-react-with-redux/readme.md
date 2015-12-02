## 例子说明

首先安装依赖项

```
npm install
```

如果还没安装`browserify`，那么也要安装一下

```
npm install -g browserify
```

然后，在当前目录运行如下脚本

```
browserify app.js -o bundle/app.js -t [ babelify --presets [ es2015 react ] ]
```

在浏览器里打开`index.html`，就可以看到效果了。