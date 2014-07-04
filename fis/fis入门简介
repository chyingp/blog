## 前言：

本文对fis进行概要性的介绍，由于篇幅原因，不会涉及太多使用、设计上的细节。想要了解更多，可参考[官方文档](http://fis.baidu.com/docs/beginning/getting-started.html)。本文内容梗概：
1. 什么是fis
3. 环境搭建
4. fis示例
5. 项目配置
5. 插件开发
6. 打包
6. 二次开发
7. 对比grunt
7. 写在后面

## 什么是[FIS](http://fis.baidu.com/)
>* FIS是专为解决前端开发中自动化工具、性能优化、模块化框架、开发规范、代码部署、开发流程等问题的工具框架。
* 专注于前端构建，无需进行任何配置轻松应付常见需求。

![Alt text](./1404401012009.png)

### 特点

**个人总结**：
1. 贴近前端工程实际（前端项目的构建需求、问题基本都已经帮你考虑到了）
2. 配置合理、灵活
3. 高效
4. 易扩展

**官方**：
三条命令，满足大部分的构建需求（每个命令带有数量不等的参数）
* 跨平台：基于`node`搭建，可运行于windows、mac、linux等平台
* 快速构建：合理的构建流程设计，有效提高构建性能
* 性能优化：内置支持文件压缩、打包等
* 本地调试：内建支持的server，方便本地调试（有java、node版）
* 灵活扩展：插件扩展、二次开发等蛮方便的
* 轻松上手：打个问号

![Alt text](./1404401100419.png)

![Alt text](./1404401130017.png)

## 环境搭建


```
npm install -g fis # 安装fis
npm install -g lights # fis采用lights管理资源；要求node版本在v0.10.27以上
```

## demo示例

假设项目如下，这里主要展示几种能力：

1. 资源嵌入
2. 资源定位
3. 资源优化
4. 本服务器
3. 打包

```
fis-first-demo/
└── src
    ├── css
    │   └── main.css
    ├── img
    │   ├── avatar.png
    │   └── saber.jpeg
    ├── index.html
    ├── js
    │   ├── lib.js
    │   ├── main.js
    │   └── util.js
    └── saber.png
```

运行如下命令

```
fis release -o 
fis server start
```

先看看运行结果

![Alt text](./1404407418784.png)


### 资源嵌入

```
<script type="text/javascript" src="js/lib.js?__inline"></script>
```

### 资源定位

下面图片，`release`后生成到`/static/avatar.png`

```
<img class="avatar" src="img/avatar.png" width="115" height="115" />
```

**配置文件fis-conf.js**
```
fis.config.merge({
    roadmap : {
        path : [
            {
                //所有的js文件
                reg : '**.js',
                //发布到/static/xxx目录下
                release : '/static/$&'
            },
            {
                //所有的css文件
                reg : '**.css',
                //发布到/static/xxx目录下
                release : '/static/$&'
            },
            {
                //所有image目录下的.png，.gif文件
                reg : /^\/img\/(.*\.(?:png|gif))/i,
                //发布到/static/xxx目录下
                release : '/static/$1'
            }
        ]
    }
});
```

### 资源优化

```
.clear{clear: both;}
.intro{margin: 10px;}
.intro .avatar{float: left;}
.intro .wording{float: left; margin-left: 10px;}
```

优化后

```
.clear{clear:both}.intro{}.intro .avatar{float:left}.intro .wording{float:left}
```

### 本地服务器

```
fis server start --type node
```

## 项目配置

按照配置粒度划分，fis的配置主要包括几项：
1. project：项目配置，如编码、支持文件类型等
2. modules：插件配置，指明用特定的插件来处理特定类型的文件。跟`settings`两者需要进行区分
3. settings：针对具体插件的配置
4. roadmap：定制项目文件属性。常用的配置项为同步路径的配置（从src到dist之间的映射）、线上路径的映射。
5. pack：配置要打包的文件。并不会对文件进行实际打包操作，而是生成一份打包关系映射表`map.json`，如需实际打包，可根据这份表自行定制打包方案。
5. deploy：部署相关的配置。

![Alt text](./1404449714919.png)

### 简单例子

下面是来自官方的例子，挺详细就不展开了：http://fis.baidu.com/docs/api/fis-conf.html
```
//fis-conf.js
fis.config.merge({
    modules : {
        parser : {
            //coffee后缀的文件使用fis-parser-coffee-script插件编译
            coffee : 'coffee-script',
            //less后缀的文件使用fis-parser-less插件编译
            //处理器支持数组，或者逗号分隔的字符串配置
            less : ['less'],
            //md后缀的文件使用fis-parser-marked插件编译
            md : 'marked'
        }
    },
    roadmap : {
        ext : {
            //less后缀的文件将输出为css后缀
            //并且在parser之后的其他处理流程中被当做css文件处理
            less : 'css',
            //coffee后缀的文件将输出为js文件
            //并且在parser之后的其他处理流程中被当做js文件处理
            coffee : 'js',
            //md后缀的文件将输出为html文件
            //并且在parser之后的其他处理流程中被当做html文件处理
            md : 'html'
        }
    }
});
```
```
//配置字符串全部转换为ascii字符
fis.config.merge({
    settings : {
        optimizer : {
            'uglify-js' : {
                output : {
                    ascii_only : true
                }
            }
        }
    }
});
```

## 插件开发

首先需要理解`fis`的单文件编译过程：
个人总结：http://www.cnblogs.com/chyingp/p/fis-plugins-optimize.html
官方文档：http://fis.baidu.com/docs/more/fis-base.html

![Alt text](./1404449567229.png)

### 实际例子：`fis-optimizer-test`

配置：

```
fis.config.merge({
    modules : {
        optimizer : {
            //js后缀文件会经过fis-optimizer-test插件的压缩优化
            js : 'test'
        }
    }
});
```

插件源码：

```
/*
 * fis插件示例
 * http://www.cnblogs.com/chyingp/p/fis-plugins-optimize.html
 */
'use strict';

module.exports = function(content, file, conf){
    return content+'\nvar nick ="程序猿小卡"';
};
```

`fis release -o`就可以看到效果了

```
console.log('inline file');

function hello(argument) {
    var nick = 'casper';
    var age = 26;
}
var nick ="casper"  // 这货就是fis-optimizer-test加上的
```

## 打包

前面提到过，fis的打包只是生成一份映射表`map.json`，具体的打包方案需要用户自行定制。

### 打包规则来源
1. 依赖声明
2. 显示声明

#### 依赖声明

比如在index.html里声明依赖

```
<!--
    @require demo.js
    @require "demo.css"
-->
```

编译后生成
```
{
    "res" : {
        "demo.css" : {
            "uri" : "/static/css/demo_7defa41.css",
            "type" : "css"
        },
        "demo.js" : {
            "uri" : "/static/js/demo_33c5143.js",
            "type" : "js",
            "deps" : [ "demo.css" ]
        }
    },
    "pkg" : {}
}
```

#### 显示声明

打包配置如下：
```
//fis-conf.js
fis.config.merge({
    pack : {
        //打包所有的demo.js, script.js文件
        //将内容输出为static/pkg/aio.js文件
        'pkg/aio.js' : ['**/demo.js', /\/script\.js$/i],
        //打包所有的css文件
        //将内容输出为static/pkg/aio.css文件
        'pkg/aio.css' : '**.css'
    }
});
```

生成的表`map.json`

```
{
    "res": {
        "demo.css": {
            "uri": "/static/css/demo_7defa41.css",
            "type": "css",
            "pkg": "p1"
        },
        "demo.js": {
            "uri": "/static/js/demo_33c5143.js",
            "type": "js",
            "deps": [
                "demo.css"
            ],
            "pkg": "p0"
        },
        "index.html": {
            "uri": "/index.html",
            "type": "html",
            "deps": [
                "demo.js",
                "demo.css"
            ]
        },
        "script.js": {
            "uri": "/static/js/script_32300bf.js",
            "type": "js",
            "pkg": "p0"
        },
        "style.css": {
            "uri": "/static/css/style_837b297.css",
            "type": "css",
            "pkg": "p1"
        }
    },
    "pkg": {
        "p0": {
            "uri": "/static/pkg/aio_5bb04ef.js",
            "type": "js",
            "has": [
                "demo.js",
                "script.js"
            ],
            "deps": [
                "demo.css"
            ]
        },
        "p1": {
            "uri": "/static/pkg/aio_cdf8bd3.css",
            "type": "css",
            "has": [
                "demo.css",
                "style.css"
            ]
        }
    }
}
```

## 二次开发

**官方介绍**

>1、简单的一个配置即可成为另外一个工具
2、自定义插件+规范+... 一个解决诸多问题的解决方案

>FIS具有高扩展性，可以通过配置进行各种目录结构等的定制，同时FIS拥有足够数量的插件，用户可以下载这些插件，配置使用。也可以按照自己的需求开发定制插件。可能有些人会问，如果插件多了后该如何维护。其实，FIS具有可包装性。比如现在市面上的fis-plus、gois、jello、spt等都是包装了FIS，可以使用这种包装性，把多个插件以及FIS包装成为新的一个工具。这就是为什么FIS会定义为工具框架的原因。

上面的介绍来自[官方文档](http://fis.baidu.com/docs/dev/solution.html)。对于为何需要二次开发，个人的看法是：
1. 满足定制需求（废话）
2. 解决`诸多问题`，这里除了项目本身的需求，还有工具本身可能存在的问题，如fis、fis插件的升级、多版本并存问题（fis是全局安装的，升个级，所有项目跑不转了这可摊上大事了。。），

```
drwxr-xr-x  10 nobody  staff  340  7  2 23:14 colors
drwxr-xr-x   7 nobody  staff  238  7  2 23:14 commander
drwxr-xr-x   7 nobody  staff  238  7  2 23:14 fis-command-install
drwxr-xr-x  11 nobody  staff  374  7  2 23:14 fis-command-release
drwxr-xr-x   9 nobody  staff  306  7  2 23:14 fis-command-server
drwxr-xr-x   9 nobody  staff  306  7  2 23:14 fis-kernel
drwxr-xr-x   8 nobody  staff  272  7  2 23:14 fis-optimizer-clean-css
drwxr-xr-x   8 nobody  staff  272  7  2 23:14 fis-optimizer-png-compressor
drwxr-xr-x   8 nobody  staff  272  7  2 23:14 fis-optimizer-uglify-js
drwxr-xr-x   7 nobody  staff  238  7  2 23:14 fis-packager-map
drwxr-xr-x   7 nobody  staff  238  7  2 23:14 fis-postprocessor-jswrapper
drwxr-xr-x   8 nobody  staff  272  7  2 23:14 fis-spriter-csssprites
```

### 举个例子：`fis-hello`
远比想象中要容易，直接看官方文档吧：http://fis.baidu.com/docs/dev/solution.html

## 对比grunt

经常有人拿grunt、fis进行对比，其实两者并不是同一层面的内容。grunt是前端构建工具，而fis则是前端集成解决方案。

举个不是很恰当的例子，就拿http协议、浏览器的关系来说吧。

* grunt：制定了http协议，但想要浏览网页，你得先开发个浏览器
* fis：制定了http协议，同时提供了浏览器。哦，你还可以安装一些扩展。

这里就讲**fis相对于grunt的优势**吧。
1. 更贴近前端工程实际（废话）
2. 更加灵活合理的配置
3. 更加高效的构建流

## 写在后面

写得匆忙，如有错漏敬请指出 :)

**一些链接：**
官网：http://fis.baidu.com/
getting started：http://fis.baidu.com/docs/beginning/getting-started.html
插件开发：http://fis.baidu.com/docs/dev/plugin.html
项目配置：http://fis.baidu.com/docs/api/fis-conf.html
