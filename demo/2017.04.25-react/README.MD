## 初始化

### 安装react全家桶

```bash
npm install react react-dom redux redux-thunk react-redux react-router react-router-redux --save
```

注意：react-router 是个神坑，从 0.x -> 2.x -> 4.x ，每个版本API变化非常大

### 安装babel

```bash
npm install --save-dev babel-cli babel-preset-env babel-preset-react
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


## 步骤

* 环境初始化
* redux + redx-*
* react-router
* webpack
* 组件：js + css
* 按需加载
* production 所需
* eslint
* test

* react -- ok
* react + redux -- ok
* react + redux + redux-thunk -- ok
* react + redux + redux-thunk + react-redux -- ok
* react + redux + redux-thunk + react-redux + react-router -- ok
* react + redux + redux-thunk + react-redux + react-router + connected-react-router


## 相关链接

react全家桶

react-redux：https://github.com/reactjs/react-redux
Usage with React://redux.js.org/docs/basics/UsageWithReact.html
react-router：https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux
react-router中文文档：https://react-guide.github.io/react-router-cn/docs/Introduction.html
react-router-redux：https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux
react-router@4.0 使用和源码解析：http://www.jianshu.com/p/27ee7df4ccc1
connected-react-router：https://github.com/supasate/connected-react-router