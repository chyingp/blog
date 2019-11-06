## RN项目初始化

环境说明：

```
* node：10.13.0
```

项目根路径下，安装`react-native`

```bash
npm install react-native --save-dev
```

初始化RN项目：

```bash
npx react-native init RnWebTest
cd RnWebTest
npm install
```

在ios模拟器里运行

```bash
npx react-native run-ios
```

## react-native-web集成

安装依赖

```bash
npm install --save react-native-web
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-flow
npm install --save-dev babel-loader

npm install webpack webpack-cli --save-dev
```

