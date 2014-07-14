/**
 * Created by a on 14-7-15.
 */
var cheerio = require('cheerio'),   // 主角 cheerio
	fs = require('fs'),
	url = require('url'),
	path = require('path');

var from = 'src/index.html',    // 源文件
	to = 'dest/index.html', // 最终生成的文件
	fromDir = path.dirname(from),
	toDir = path.dirname(to),
	content = fs.readFileSync(from),
	$ = cheerio.load(content),  // 加载源文件
	fd = 0;

// 选取 src/index.html 里所有的script标签，并将带有 __inline 标记的内嵌
$('script').each(function(index, script){
	var script = $(this),
		src = script.attr('src'),
		urlObj = url.parse(src),
		fromDir = path.dirname(from),
		pathname = path.resolve(fromDir, urlObj.pathname),
		scriptContent = '';

	// 关键步骤：__inline 检测！（ps：非严谨写法）
	if(urlObj.search.indexOf('__inline')!=-1){
		scriptContent = fs.readFileSync(pathname);
		script.replaceWith('<script>'+ scriptContent +'</script>');
	}
});

// 创建dest目录
if(!fs.existsSync(toDir)){
	fs.mkdirSync(toDir);
}

// 将处理完的文件写回去
fd = fs.openSync(to, 'w');
fs.writeFileSync(to, $.html());
fs.closeSync(fd);