var Handlebars = require('handlebars'),
	fs = require('fs');

// Handlebars.registerHelper('title', function(obj){
// 	return 'body: ' + obj;
// });

Handlebars.registerHelper('noop', function(options) {
  return options.fn(this);
});

Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context.story);
});

var str = fs.readFileSync('views/demo.html').toString();
var template = Handlebars.compile(str);

var ret = template({
  title: "First Post",
  sub: {
	  story: {
	    intro: "Before the jump",
	    body: "After the jump"
	  }
  }
});

console.log(ret);


// Handlebars.registerHelper('link_to', function() {
//   return new Handlebars.SafeString("<a href='" + Handlebars.Utils.escapeExpression(this.url) + "'>" + Handlebars.Utils.escapeExpression(this.body) + "</a>");
// });
 
// var context = { posts: [{url: "/hello-world", body: "Hello World!"}] };
// var source = "<ul>{{#posts}}<li>{{link_to}}</li>{{/posts}}</ul>"
 
// var template = Handlebars.compile(source);
// console.log(template(context));