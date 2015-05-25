var Handlebars = require('handlebars'),
	fs = require('fs');

var data = {
	node: [
		{name: 'casper', email: 'casper@qq.com'},
		{name: 'chyingp', email: 'chyingp@qq.com'}
	]
};

Handlebars.registerHelper('table', function(data){
	// console.log(arguments);
	var str = '<div class="table">\n';
	for(var i=0; i<data.length; i++){
		str += '<div>name:'+ data[i].name+', email:'+ data[i].email +'</div>\n';
	}
	str += '</div>';
	// return str;
	return new Handlebars.SafeString (str);
});

var tmpl = fs.readFileSync('views/table.html').toString();
var template = Handlebars.compile(tmpl);
var ret = template(data);

console.log(ret);