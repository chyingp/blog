var hbs = require('hbs');
var blocks = {};

hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name, context) {
	var len = (blocks[name] || []).length;
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];

    if(!len){
    	return context.fn(this);
    }else{
    	return val;
    }
});