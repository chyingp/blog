var fs = require('fs');

function readFile (filepath) {
    return new Promise((resolve, reject) => fs.readFile(filepath, {encoding: 'utf8'}, (error, content) => {
        if(error) {
            reject(error);
        }else{
            resolve(content);
        }
    }));
}

function* main () {
    var content = yield readFile('./hello.txt');
}

main()
    .next()
    .value
    .then((content) => {
        console.log('file content is: %s', content);
    });