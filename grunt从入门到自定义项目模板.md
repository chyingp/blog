# Grunt
## 一.Grunt入门介绍
### 1. Grunt是神马
基于任务的命令行构建工具（针对JavaScript项目）

链接：[http://gruntjs.com/](http://gruntjs.com/)
### 2. 使用Grunt的理由
前端的工具算得上是五花八门，在介绍如何Grunt之前，首先我们得反问自己：

* Grunt能够帮我们解决什么问题？
* 是否有其他更合适的替代方案？

### 3. Grunt能够帮我们解决什么问题？
作为一名开发人员，我们见过了不少功能胡里花哨但并不实用的工具。但是，我们很少会因为一个工具功能很强大而去使用它。更多地，是因为在工作中我们遇到了一些问题，而某个工具刚好帮我们解决了这些问题。

假设我们有个叫`IMWEB_PROJ`的项目，该项目主要包含两个功能模块，分别是`moduleA`、`moduleB`。回想一下，作为一名前端开发人员，从功能开发到产品正式上线，我们的工作流程是什么样的：

正式进入编码工作前，得做些准备工作：

* 新建目录`IMWEB_PROJ`，index.html为主入口；根目录下面再另外新建三个目录js、css、img，分别用来存放js文件、css文件、图片
* IMWEB_PROJ/js下新建个main.js作为项目主逻辑的入口，添加moduleA.js、modueB.js，对了，不能把我们的基础组件Badjs.js、simple.js、nohost.js给忘了
* IMWEB_PROJ/css下新建个reset.css，添加moduleA.css、moduleB.css

热火朝天地编码，产品终于即将上线，上线前的准备工作同样不能马虎

* **`JSHint`**——检查下JS代码规范性，避免进行类似隐式全局变量这样的坑里
* **`concat`**——JS文件合并，合理减少请求数，提升加载速度
* **`cssmin`**——CSS文件合并，合理减少请求数，提升加载速度
* **`Uglyfy`**——压缩文件，减少文件尺寸，提升用户侧加载速度
* **`QUnit`**——单元测试，提高项目可维护性，结合递归测试可尽早发现潜在问题
* …

上面的场景是不是很眼熟？重复而枯燥的工作占据了我们太多的时间，忘了谁说过，当重复做一件事超过三次，就应该考虑将它自动化。

Grunt正是为了解决上述问题而诞生，它将上面提到的项目结构生成、JSHint检查、文件合并、压缩、单元测试等繁琐的工作变成一个个可自动化完成的任务，一键搞定。

### 4. 其他使用Grunt的理由
* 文档丰富：详细的使用说明，从入门使用，到高级定制，非常详尽
* 插件丰富：基本能够想到的常用的任务，都可以找到
* 社区活跃：Grunt的开发团队还是挺勤劳的，社区活跃度也挺高

### 5. 是否有其他更合适的替代方案？
当然有，而且不少，Ant、Yeoman、Mod、Fiddler+willow+qzmin等，先不展开

## 二. 从零开始使用Grunt
参考链接：[http://gruntjs.com/getting-started](http://gruntjs.com/getting-started) 

Grunt使用场景通常分两种： 

1. 维护现有的Grunt项目——已经配置好的项目，下面以jQuery Plugin项目为例进行讲解，简单了解下一个Grunt项目的基本结构；
2. 新创建的Grunt项目——包括项目目录结构的创建，到Grunt任务的配置等；这里可以采用现有的Grunt模板，也可以采用自定义的模板；下文会采用自定义模板的形式，逐步讲解如何创建一个**IMWEB团队的前端基础项目结构**

### 1. 环境以及依赖
Grunt以及Grunt的插件，都是通过npm进行安装和管理，所以首先得安装node环境，不赘述，见 [http://nodejs.org/](http://nodejs.org/)
### 2. 关于版本
注意：为了解决多版本并存的问题，从`0.4.x`版本开始，每个项目需独立安装Grunt及对应插件，版本分别如下：

* Grunt `0.4.x` 
* Nodejs `>=0.8.0`

### 3. 卸载老版本Grunt(版本<0.4.0)
grunt从版本0.3.X到0.4.x，变化比较大，主要是为了解决Grunt多版本共存的问题，有兴趣的童鞋可以了解下。如果之前安装了0.3.x版本，需先进行卸载

	npm uninstall -g grunt
### 4. 安装grunt-cli
grunt-cli的主要作用是让我们可以运行Grunt命令，加上-g，则可以在任意目录下运行，不展开

	npm install -g grunt-cli
### 5. 安装grunt-init
grunt-init是个脚手架工具，它可以帮你完成项目的自动化创建，包括项目的目录结构，每个目录里的文件等。具体情况要看你运行grunt-init指定的模板，以及创建过程中你对问题的回答，下文会简单讲到这个功能。

先运行下面命令安装grunt-init，

	npm install -g grunt-init
	
下面我们先通过安装jQuery Plugin模板，来展示Gurnt模板的安装，项目的创建，以及一个Grunt项目的目录结构

## 三、jQuery Plugin示例：如何通过现有模板创建项目、运行Grunt任务
参考连接：[http://gruntjs.com/project-scaffolding](http://gruntjs.com/project-scaffolding)

### 1. 安装jQuery Plugin模板
下面命令可以查看官方维护的Grunt模板
	
	grunt-init --help

运行下面命令安装jQuery模板

	git clone git@github.com:gruntjs/grunt-init-jquery.git ~/.grunt-init/jquery
	
### 2. 根据jQuery Plugin模板创建项目
在上一步中我们已经安装好了jQuery模板，接着运行下面命令，安装jQuery项目

	grunt-init jquery
	
按照引导回答下面问题，完成项目的创建

	Please answer the following:
	[?] Project name (test) DemoJQuery            
	[?] Project title (DemojQuery)   
	[?] Description (The best jQuery plugin ever.) just for test
	[?] Version (0.1.0) 1.0.0
	[?] Project git repository (git://github.com/root/test.git) 
	[?] Project homepage (https://github.com/root/test) 
	[?] Project issues tracker (https://github.com/root/test/issues) 
	[?] Licenses (MIT) 
	[?] Author name (none) 程序 猿 小卡
	[?] Author email (none) 
	[?] Author url (none) http://chyingp.cnblogs.com
	[?] Required jQuery version (*) 1.9.0
	[?] Do you need to make any changes to the above before continuing? (y/N) N

项目目录结构如下：

	//项目目录结构
	-rw-r--r--   1 root        staff  1670  5  9 15:13 CONTRIBUTING.md
	-rw-r--r--   1 root        staff   559  5  9 15:13 DemoJQuery.jquery.json
	-rw-r--r--   1 root        staff  2184  5  9 15:13 Gruntfile.js
	-rw-r--r--   1 root        staff  1053  5  9 15:13 LICENSE-MIT
	-rw-r--r--   1 root        staff   543  5  9 15:13 README.md
	drwxr-xr-x   5 root        staff   170  5  9 15:13 libs
	-rw-r--r--   1 root        staff   423  5  9 15:13 package.json
	drwxr-xr-x   4 root        staff   136  5  9 15:13 src
	drwxr-xr-x   5 root        staff   170  5  9 15:13 test
	
从上面的目录结构，大致可以看出各个目录、文件的作用，其中我们需要注意的是两个文件Gruntfile.js、package.json，这两个文件都需要放在项目跟目录下。下面会稍微详细介绍到：

* **Gruntfile.js** 项目的Grunt配置信息，包括模块依赖、任务定义
* **package.json** 项目node模块的依赖信息，主要根据Gruntfile生成

其他其他文件非Grunt项目必须的，可以暂时不去看它

### 3. 运行Grunt任务
首先运行下面命令，安装所需node模块，耐心等候安装完即可
	
	npm install
	
输入下面命令，运行Grunt任务

	grunt

输出如下，done

	Running "jshint:gruntfile" (jshint) task
	>> 1 file lint free.

	Running "jshint:src" (jshint) task
	>> 1 file lint free.
	
	...
### 4. 如何创建package.json
方式一：运行下面命令，通过逐步回答问题的方式创建基础的package.json文件2```
	
	npm install
方式二：创建空的package.json文件，拷贝下面内容，根据需要进行修改

	{  "name": "HelloProj",
	  "version": "0.1.0",
	  "devDependencies": {
	    "grunt": "~0.4.1",
	    "grunt-contrib-jshint": "~0.1.1",
	    "grunt-contrib-nodeunit": "~0.1.2"
	  }
	}
创建完package.json，运行如下命令，安装所需插件

	npm install
	
### 5. 如何安装Grunt
运行如下命令，安装`最新版`的Grunt

	npm install grunt --save-dev
### 6. 创建Gruntfile.js
Gruntfile.js的配置文件格式并不复杂，不过刚开始看的时候会有些云里雾里，直接拿官方范例进行修改即可。参考链接：[http://gruntjs.com/sample-gruntfile](http://gruntjs.com/sample-gruntfile)

	module.exports = function(grunt) {

		// 项目配置信息，这里只是演示用，内容随便填的
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			uglify: {	//压缩文件
				build: {
					src: 'src/<%= pkg.name %>.js',
				    dest: 'build/<%= pkg.name %>.min.js'
				}
			},
		    concat: {	//合并文件
				js:{
					src: ['js/moduleA.js', 'js/moduleB.js'],
					dest: 'dist/js/moduleA-moduleB.js'
				},
				css:{
					src:['dist/css/moduleA.css', 'dist/css/moduleB.css'],
					dest: 'dist/css/moduleB.css'
				}
			}
		});

		// 加载uglify插件，完成压缩任务
		grunt.loadNpmTasks('grunt-contrib-uglify');
		
		// 加载concat插件，完成文件合并任务
		grunt.loadNpmTasks('grunt-contrib-concat');

		// 默认任务，如果运行grunt命令，且后面没有指定任务，或为defalut时，运行这个
		grunt.registerTask('default', ['concat', 'uglify']);

	};

其实这种方式还是有点麻烦，Grunt团队还是比较人性化的，针对Gruntfile，还提供了一个单独的plugin，让我们免去重复劳动之苦，后面再讲

## 四. imweb_template：自定义模板，创建IMWEB团队专属的前端项目骨架

### 1. 下载Grunt官方示例模板
下载链接：[https://github.com/gruntjs/grunt-init-jquery](https://github.com/gruntjs/grunt-init-jquery)

打开下载下来的示例目录，可以看到如下内容：

	-rwxr-xr-x@  1 casperchen  staff   877  2 18 09:00 README.md
	-rwxr-xr-x@  1 casperchen  staff   138  2 18 09:00 rename.json
	drwxr-xr-x@ 10 casperchen  staff   340  2 18 09:00 root
	-rwxr-xr-x@  1 casperchen  staff  3521  2 18 09:00 template.js

简单介绍下里面内容：

* **`template.js`** 主模板文件，非常重要！里面主要内容有：项目创建时需要回答的问题，项目依赖的Grunt模块（根据这个生成package.json）
* **`rename.json`** 针对当前模板的目录/文 件重命名规则，不赘述
* **`root/`** 重要！在这个目录里的文件，通过该模板生成项目结构时，会将root目录下的文件都拷贝到项目中去


### 2. 创建自定义项目之前
将之前下载的`grunt-init-jquery-master`重命名为`imweb_template`，然后就开始我们的模板自定义之旅了！鉴于这块的内容实在太多，就不详细讲解，直接贴上修改后的文件，可以更为直观，如需深入了解，可查看相关链接：[http://gruntjs.com/project-scaffolding](http://gruntjs.com/project-scaffolding)

### 3. 修改imweb_template/template.js
下面是template.js最常包含的一些内容，主要包括：

* **`exports.description`** 模板简单介绍信息
* **`exports.notes`** 开始回答项目相关问题前，控制台打印的相关信息
* **`exports.after`** 开始回答项目相关问题前，控制台打印的相关信息
* **`init.process`** 项目创建的时候，需要回答的问题
* **`init.writePackageJSON`** 生成package.json，供Grunt、npm使用

```
  /* 
   * 模板名字
   * https://gruntjs.com/ 
   *
   * 版权信息
   * Licensed under the MIT license.
   */

  'use strict';

  // 模板简单介绍信息
  exports.description = '创建IMWEB专属模板，带文件合并压缩哦！';

  // 开始回答项目相关问题前，控制台打印的相关信息
  exports.notes = '这段信息出现位置：回答各种项目相关的信息之前 ' +
    '\n\n'+
    '逐个填写就行，如果不想填的会可以直接enter跳过';

  // 结束回答项目相关问题后，控制台打印出来的信息
  exports.after = '项目主框架已经搭建好了，现在可以运行 ' +
    '\n\n' +
    '1、npm install 安装项目依赖的node模块\n'+
    '2、grunt 运行任务，包括文件压缩、合并、校验等\n\n';

  // 如果运行grunt-init运行的那个目录下，有目录或文件符合warOn指定的模式
  // 则会跑出警告，防止用户不小心把当前目录下的文件覆盖了，一般都为*，如果要强制运行，可加上--force
  // 例：grunt-init --force imweb_template
  exports.warnOn = '*';

  // The actual init template.
  exports.template = function(grunt, init, done) {

    init.process({type: 'IMWEB'}, [
      // 项目创建的时候，需要回答的问题
      init.prompt('name'),
      init.prompt('title'),
      init.prompt('description', 'IMWEB项目骨架'),
      init.prompt('version', '1.0.0'),
      init.prompt('author_name'),
      init.prompt('author_email'),
    ], function(err, props) {

      props.keywords = [];

      // 需要拷贝处理的文件，这句一般不用改它
      var files = init.filesToCopy(props);

      // 实际修改跟处理的文件，noProcess表示不进行处理
      init.copyAndProcess(files, props, {noProcess: 'libs/**'});

      // 生成package.json，供Grunt、npm使用
      init.writePackageJSON('package.json', {
        name: 'IMWEB-PROJ',
        version: '0.0.0-ignored',
        npm_test: 'grunt qunit',
        
        node_version: '>= 0.8.0',
        devDependencies: {
          'grunt-contrib-jshint': '~0.1.1',
          'grunt-contrib-qunit': '~0.1.1',
          'grunt-contrib-concat': '~0.1.2',
          'grunt-contrib-uglify': '~0.1.1',
          'grunt-contrib-cssmin': '~0.6.0',
          'grunt-contrib-watch': '~0.2.0',
          'grunt-contrib-clean': '~0.4.0',
        },
      });

      // All done!
      done();
    });
  };
```
### 4. 修改imweb_template/rename.json

reame.json的作用比较简单，定义了从root目录将文件拷贝到实际项目下时的路径映射关系，以`sourcepath: destpath`的形式声明。sourcepath是相对于root的路径，而destpath则是相对于实际项目的路径。

ps：当destpath为false时，sourcepath对应的文件不会被拷贝到项目中去

```
  {
    "src/*.js": "js/*.js",
    "test/test.html": "test/test.html"
  }
```

### 5. imweb_template/root 目录
进入root目录，可以看到很多文件，其中我们需要关注的有Gruntfile.js、README.md

* Gruntfile.js 项目的任务配置信息，把基础任务，如jshint、concat、uglify等配置好即可，其他的各个任务可自行扩充
* README.md 项目的readme信息，一个调理清晰的readme很重要

```
-rwxr-xr-x@  1 casperchen  staff  2408  5 10 09:34 Gruntfile.js
-rwxr-xr-x@  1 casperchen  staff   605  2 18 09:00 README.md
drwxr-xr-x   4 casperchen  staff   136  5  9 20:31 css
drwxr-xr-x@  8 casperchen  staff   272  5  9 20:44 js
drwxr-xr-x@  5 casperchen  staff   170  2 18 09:00 libs
drwxr-xr-x@  5 casperchen  staff   170  2 18 09:00 test
```

### 6. 修改Gruntfile.js
对Gruntfile.js文件进行修改，如下，熟悉qzmin配置文件的童鞋应该很容易看懂

```
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' */\n',
    // 任务配置信息

    clean: {  // Grunt任务开始前的清理工作
      files: ['dist']
    },
    concat: { //文件压缩
      js_and_css: {
        files: {
          // js文件合并
          'dist/js/base.js': ['js/simple.js', 'js/badjs.js', 'js/nohost.js'],
          'dist/js/main.js': ['js/moduleA.js', 'js/moduleB.js' 'js/main.js'],

          // css文件合并
          'dist/css/style.css': ['css/reset.css', 'css/moduleA.css', 'css/moduleB.css']
        }
      }
    },
    uglify: { //js文件压缩
      js: {
        files: {
          'dist/js/base.min.js': ['dist/js/base.js'],
          'dist/js/main.min.js': ['dist/js/main.js']
        }
      }
    },
    cssmin:{  //CSS文件压缩
      css: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.css']
        }
      }
    },
    qunit: {  //单元测试，范例中未启用
      files: ['test/**/*.html']
    },
    jshint: { //文件校验，范例中未启用
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'js/.jshintrc'
        },
        src: ['js/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },
    watch: {  //watch任务，实时监听文件的变化，并进行编译
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      }
    },
  });

  // 加载各种grunt插件完成任务
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 默认任务
  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);
  //grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);

};

```

### 7. 进入实战
花了一点时间把IMWEB_PROJ配置好，现在终于到了实际运作阶段了。假设我们当前在目录IMWEB_PROJ下，imweb_template为IMWEB_PROJ目录当前仅有的内容

```
drwxr-xr-x@  8 casperchen  staff     272  5 10 00:59 imweb_template
```

操作步骤可参照**jQuery Plugin示例：如何通过现有模板创建项目、运行Grunt任务**，下面直接上命令

	grunt-init --force imweb_template/
	npm install
	grunt

下面为运行grunt命令后控制台输出的信息

```
Running "clean:files" (clean) task
Cleaning "dist"...OK

Running "concat:js_and_css" (concat) task
File "dist/js/base.js" created.
File "dist/js/main.js" created.
File "dist/css/style.css" created.

Running "uglify:js" (uglify) task
File "dist/js/base.min.js" created.
Uncompressed size: 96927 bytes.
Compressed size: 7609 bytes gzipped (34814 bytes minified).
File "dist/js/main.min.js" created.
Uncompressed size: 926 bytes.
Compressed size: 93 bytes gzipped (305 bytes minified).

Running "cssmin:css" (cssmin) task
File dist/css/style.min.css created.

Done, without errors.
```

可以看到HelloProj目录下的内容发生了改变，enjoy yourself！

```
-rw-r--r--   1 root        staff    2398  5 10 14:39 Gruntfile.js
-rw-r--r--   1 root        staff     605  5 10 14:37 README.md
drwxr-xr-x   6 root        staff     204  5 10 14:37 css
drwxr-xr-x   4 root        staff     136  5 10 14:39 dist
drwxr-xr-x@  8 casperchen  staff     272  5 10 00:59 imweb_template
drwxr-xr-x  10 root        staff     340  5 10 14:37 js
drwxr-xr-x   5 root        staff     170  5  9 20:17 libs
drwxr-xr-x  10 casperchen  staff     340  5 10 09:28 node_modules
-rw-r--r--   1 root        staff     458  5 10 14:37 package.json
drwxr-xr-x   4 root        staff     136  5  9 20:17 src
drwxr-xr-x   5 root        staff     170  5  9 20:17 test
```
## 五. 关于Grunt、Ant、Mod的对比
上面对Grunt进行了入门介绍，下面简单说下Ant、aven

* Ant：做过java开发的童鞋一般都不会陌生，功能很强大，相对Grunt来说更容易入门，配置文件更加友好，据说yahoo前端团队用的Ant，推荐个不错的教程：[http://www.book.36ria.com/ant/index.html#index](http://)
* Mod：元彦童鞋开发维护，功能很强大，grunt能完成的，Mod都能完成，而且使用更加贴近我们的项目实践，入门更简单（有部分原因是因为mod集成了很多常用户任务，而Grunt早期也是这么做的，不过因为多版本的问题放弃了这种做法），之前听过元彦的分享，挺不错的，打算在项目中试用下。github地址：[https://github.com/modulejs/modjs](https://github.com/modulejs/modjs)

## 六. 写在最后
由于时间问题，这里没有对Grunt、Ant、Mod进行详细的对比，来个todo吧~~
