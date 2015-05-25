var Handlebars = require('hanlebars'),
	fs = require('fs');

Handlebars.registerHelper('inherit', function(basePath){

});

Handlebars.registerHelper('override', function(){

});

var indexTemplate = Handlebars.compile( fs.readFileSync('views/index.hbs') );
var indexStr = indexTemplate({});

var layoutTemplate = Handlebars.compile( fs.readFileSync('views/layout.hbs').toString() );