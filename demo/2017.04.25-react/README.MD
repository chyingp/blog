## 安装react全家桶

基础套装：

```bash
npm install --save react react-dom
```

redux套餐：

```bash
npm install --save redux redux-thunk react-redux
```

react-router套餐：

```bash
npm install --save react-router react-router-redux
```

注意：react-router 是个神坑，从 0.x -> 2.x -> 4.x ，每个版本API变化非常大

## 安装babel全家桶

首先，babel基础套餐：

```bash
npm install --save-dev babel-cli babel-preset-env
```

配套`.bashrc`

```javascript
{
  "presets": ["env"]
}
```

最好安装下`babel-polyfill`，增加对`Promise`、`Array.from`等的支持。

```bash
npm install --save-dev babel-polyfill
```

如果要支持react，那么

```bash
npm install --save-dev babel-preset-react
```

配置文件如下：

```javascript
{
  "presets": ["env", "react"]
}
```

TODO：启用source map

```bash
npm install --save-dev babel-loader babel-core
```


## 安装webpack全家桶

基础套餐：

```bash
npm install --save-dev webpack
```

增加`babel-loader`

```bash
npm install --save-dev babel-loader
```

在package.json中添加webpack启动脚本

```
"start": "webpack --config webpack.config.js -w",
```

基础配置如下：

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


babel-polyfill、babel-runtime区别：
http://www.ruanyifeng.com/blog/2016/01/babel.html#comment-367093