const fromArray = require('from2-array');
const through = require('through2');
const fs = require('fs');

function concatFiles (destination, files, callback) {
  const dest = fs.createWriteStream(destination, {});
  fromArray.obj(files)
    .pipe(through(function (file, enc, done) {
      let r = fs.createReadStream(file);
      r.pipe(dest, {end: false});
      r.on('end', done);
    }))
    .on('finish', () => {
      dest.end();
      callback();
    });
}

concatFiles('/tmp/dest.txt', ['./hello.txt', './world.txt'], () => console.log('= =b'));