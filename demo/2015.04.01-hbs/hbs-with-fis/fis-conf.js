var hbs = require('hbs'),
	// Handlebars = require('handlebars'),
	fs = require('fs'),
	path = require('path'),
	grunt = require('grunt');

var views = path.resolve('views'),
	dest = path.resolve('dest'),
	filename = path.resolve(views, 'index.hbs'),
	destname = path.resolve(dest, 'index.html'),
	settings = {
		views: views
	},
	options = {
		title: 'hbs without express',
		nick: 'casper',
		settings: settings
	};

require('./lib/hbs-helpers');

// hbs.__express(filename, options, function(err, res){
// 	grunt.file.write(destname, res);
// });

fis.config.merge({
	modules: {
		parser: {
			hbs: function(content, file, conf){
			 //    conf.paths = [ file.dirname, root ];
			 //    conf.syncImport = true;
			 //    conf.relativeUrls = true;
			 //    var parser = new(less.Parser)(conf);
			 //    parser.parse(content, function (err, tree) {
			 //        if(err){
			 //            throw err;
			 //        } else {
			 //            if(parser.imports){
			 //                fis.util.map(parser.imports.files, function(path){
			 //                    file.cache.addDeps(path);
			 //                });
			 //            }
			 //            content = tree.toCSS(conf);
			 //        }
			 //    });
				// return content;
				var filename = file.filename;
				hbs.__express(filename, options, function(err, res){
					grunt.file.write(destname, res);
				});
			}
		}
	},
	roadmap: {
        ext: {
            hbs: 'html'            
        }
    }
});