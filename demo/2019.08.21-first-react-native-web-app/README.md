首先，初始化项目

```bash
# 如果没有安装create-react-app，先安装 
npm install -g create-react-app

# 替换成你自己的项目名
create-react-app 2019.08.21-first-react-native-web-app
```

启动项目，如果自动打开浏览器并可以访问，第一步成功

```bash
npm start
```

接下来，添加 react-native-web 所需依赖

```bash
npm install --save react-native-web
```

修改`src/index.js`成如下内容：

>react-scripts里，已经对 做了 react-native -> react-native-web 的alias

```javascript
import App from './App';
import React from 'react';
import { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
```

重新跑一遍启动脚本，搞定

```bash
npm start
```