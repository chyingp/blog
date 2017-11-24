var path = require('path');

module.exports = {
  src: path.resolve(__dirname, './src'),
  tmp: path.resolve(__dirname, './.tmp'),
  dist: path.resolve(__dirname, './dist'),
	publicPath: '/oc/public/kh-m/',  // 线上访问时，需要添加的domain（fis编译工具的配置项）
  devPath: '/Users/a/Documents/code/develop/xunjiatong/InquiryHandNodeSvr/branches/2017.11.23-kh-m/app',  // 本地调试时，静态资源编译后，同步到的路径
  prodPath: '/Users/a/Documents/code/develop/xunjiatong/InquiryHandNodeSvr/branches/2017.11.23-kh-m/app',  // 本地调试时，静态资源编译后，同步到的路径
	// prodPath: path.resolve(__dirname, './app')  // 预备提测 or 发布时，静态资源编译后，同步到的路径
};