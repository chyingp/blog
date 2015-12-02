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

## 代码说明

`app.js`中，需要注意的是这一小段代码。看着有点头晕，光从使用的角度来看的话，只需要注意几点就行

1. `mapStateToProps` 这个方法，正如函数名所说，将 `store.getState()` 映射大 App 的 `props.items`。connect 方法就是为了达到这个目的。
2. render的时候，需要用`<provider>` 将 App 包裹起来，并将 store 传入
3. render时用到的 `<App>` ，实际是通过 `connect()()` 方法返回的新组件。


```
// 将 state 映射到 App 的 state.items 上
function mapStateToProps(state) {
  return {
    items: state
  };
}

var store = Redux.createStore(todoReducer);
var ConnectedApp = connect(mapStateToProps)(App);   // 映射

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('container')
    );
```