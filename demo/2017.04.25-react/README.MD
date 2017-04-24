## 初始化

### 安装react全家桶


```bash
npm install react react-dom react-router redux --save
```

### 安装babel

```bash
npm install --save-dev babel-cli babel-preset-env
```

创建`.babelrc`

```js
{
  "presets": ["env"]
}
```

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
```