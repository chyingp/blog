const through2 = require('through2');
const fs = require('fs');

fs.createReadStream('./hello.txt')
  .pipe(through2(function (chunk, encoding, callback) {
    chunk = chunk.toString().replace('world', 'Node.js');
    this.push(chunk);
    callback();
  }))
  .pipe(process.stdout)
  .on('finish', () => console.log('finish.'));

  // hello Node.js