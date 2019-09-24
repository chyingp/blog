首先，安装TSW及其依赖

```bash
git clone https://github.com/Tencent/TSW.git
cd TSW
npm install
```

启动服务（如果报错看下一步）

```bash
node --inspect index.js
```

启动服务大概率会报错，提示没有权限，因为TSW官方的getting started的例子用的是80端口。可以修改配置文件 `examples/framework/config.js`

```javascript
this.httpPort = 8001;
```