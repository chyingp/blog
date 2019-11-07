## 项目初始化

>已经熟悉项目如何初始化的同学，可以直接跳过这一小节

首先，初始化项目

```bash
# 如果没有安装create-react-app，先安装 
npm install -g create-react-app

# 替换成你自己的项目名
create-react-app 2019.08.21-react-native-web-app-className
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

## 标签、class冗余问题

将`App`改成如下定义

```
function App() {
  return (
    <View>
      <Text>hello world</Text>
    </View>
  );
}
```

在浏览器查看节点，可以看到，层级结构稍微有点复杂

```html
<div id="root">
	<div class="css-view-1dbjc4n r-flex-13awgt0 r-pointerEvents-12vffkv">
		<div class="css-view-1dbjc4n r-flex-13awgt0 r-pointerEvents-12vffkv">
			<div class="css-view-1dbjc4n">
				<div dir="auto" class="css-text-901oao">hello world</div>
			</div>
		</div>
	</div>
</div>
```