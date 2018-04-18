const { Transform } = require('stream');

class TR extends Transform {
  constructor (options = {}) {    
    super(options);    
  }

  _transform (chunk, encoding, callback) {
    let upperCasedAlphabet = chunk.toString().toUpperCase();
    this.push(upperCasedAlphabet);
    callback();
  }

  _flush (callback) {
    this.push('!');
    callback();
  }
}

const tr = new TR();
process.stdin.pipe(tr).pipe(process.stdout);

// echo "hello world" | node tr.js
// HELLO WORLD
// !