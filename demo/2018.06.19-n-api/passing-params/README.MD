node版本：10.3.0

依赖安装：

```bash
npm init -f
npm install -g node-gyp
npm install --save bindings
```

编译：

```bash
node-gyp rebuild
```

运行：

```bash
node app.js
```