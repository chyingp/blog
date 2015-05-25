var hbs = require('hbs'),
	Handlebars = require('handlebars'),
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

require('lib/hbs-helpers.js');

hbs.__express(filename, options, function(err, res){
	grunt.file.write(destname, res);
});