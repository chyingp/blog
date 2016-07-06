var nunjucks = require('nunjucks');

fis.config.merge({
	project : {
        fileType : {
            text : 'nj'
        }
    },
	modules: {
		parser: {
			nj: [function(content, file, settings){
				// console.log(JSON.stringify(file));	
				// return JSON.stringify(file, null, 4);
				return nunjucks.render(file.realpath);
			}]
		}
	},
	roadmap: {
		ext: {
			nj: 'html'
		}			
	}
});