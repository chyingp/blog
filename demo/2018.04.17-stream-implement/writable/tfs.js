const { Writable } = require('stream');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

class TFS extends Writable {
  constructor () {
    super({objectMode: true});
  }

  _write (chunk, encoding, callback) {
    mkdirp(path.dirname(chunk.path), err => {
      if (err) {
        return callback(err);
      }
      fs.writeFile(chunk.path, chunk.content, callback);
    });
  }
}

const tfs = new TFS();
tfs.write({path: '/tmp/hello.txt', content: 'hello'});
tfs.write({path: '/tmp/world.txt', content: 'world'});
tfs.end(() => console.log('The end of write.'));