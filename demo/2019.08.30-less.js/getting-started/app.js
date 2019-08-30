const fs = require('fs');
const less = require('less');
const code = fs.readFileSync('./style.less').toString();

less.render(code)
    .then(function(output) {
        console.log(output.css);
        // output.css = string of css
        // output.map = string of sourcemap
        // output.imports = array of string filenames of the imports referenced
    },
    function(error) {
        console.log(error);
    });

// or...

// less.render(css, options, function(error, output) {})