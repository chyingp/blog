/**
 * Created by a on 14-7-15.
 */
var cheerio = require('cheerio'),
	fs = require('fs'),
	url = require('url'),
	path = require('path'),
	from = 'src/index.html',
	to = 'dest/index.html',
	content = fs.readFileSync(from),
	$ = cheerio.load(content),
	fd = 0;

$('script').each(function(index, script){
	var script = $(this),
		src = script.attr('src'),
		urlObj = url.parse(src),
		dir = path.dirname(from),
		pathname = path.resolve(dir, urlObj.pathname),
		scriptContent = '';

	if(urlObj.search.indexOf('__inline')!=-1){
		scriptContent = fs.readFileSync(pathname);
		script.replaceWith('<script>'+ scriptContent +'</script>');
	}
});

// 创建dest目录
if(!fs.exists(path.dirname(to))){
	fs.mkdirSync(path.dirname(to));
}

fd = fs.openSync(to, 'w');
fs.writeFileSync(to, $.html());
fs.closeSync(fd);



