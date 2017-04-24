## 初始化

### 安装react全家桶


```bash
npm install react react-dom react-router redux --save
```

### 安装babel

```bash
npm install --save-dev babel-cli babel-preset-env
```

```bash
npm install --save-dev babel-loader babel-core
```

创建`.babelrc`

```js
{
  "presets": ["env"]
}
```

增加react支持，参考 https://babeljs.io/docs/plugins/preset-react/



### 安装webpack

```bash
npm install --save-dev webpack
```

在package.json中添加webpack启动脚本

```
"start": "webpack --config webpack.config.js",
```

基础配置：

```js
var path = require('path');

module.exports = {
  entry: './containers/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
```

### 安装开发工具

Download the React DevTools and use an HTTP server (instead of a file: URL) for a better development experience: https://fb.me/react-devtools