//scss后缀的文件，用fis-parser-sass插件编译
fis.config.set('modules.parser.scss', 'sass');
//scss文件产出为css文件
fis.config.set('roadmap.ext.scss', 'css');

// 标准化后的处理
fis.config.merge({
	modules:{
		postprocessor: {
			css: 'replace-user'
		}
	}
});