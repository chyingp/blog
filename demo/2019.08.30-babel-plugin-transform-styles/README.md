## 依赖安装

```bash
npm install --save-dev babel-core@6.26.3 babel-cli@6.26.0 babel-plugin-transform-styles@0.0.3 babel-preset-react-native@4.01
```
## babel配置

.babelrc配置

```json
{
    "presets": ["react-native"],
    "plugins": [["transform-styles", {"extensions": ["css"]}]]
}
```

## 代码转换

方式一：命令行转换

```bash
npx babel index.js
```

方式2：通过代码调用转换

```javascript
require('babel-core').transform('code', {
    plugins: [['transform-styles', {
                extensions: ['css'],
              }]]
});
```

## 转换结果

```javascript
var _jsxFileName = 'index.js';
var _styles = require('react-native').StyleSheet.create({
    "container": {
        "flex": 1,
        "justifyContent": "center",
        "alignItems": "center",
        "backgroundColor": "#F5FCFF",
        "margin": 0,
        "marginTop": 10,
        "marginRight": 5,
        "marginBottom": 10,
        "marginLeft": 5,
        "borderBottomWidth": require('react-native').StyleSheet.hairlineWidth,
        "shadowOpacity": 4,
        "shadowOffset": {
            "width": 2,
            "height": 4
        },
        "elevation": 1
    }
});
var _styles2 = _interopRequireDefault(_styles);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj: {
    default:
        obj
    };
}
React.createElement(Container, {
    style: _styles2.default.container,
    __source: {
        fileName: _jsxFileName,
        lineNumber: 3
    }
});
```