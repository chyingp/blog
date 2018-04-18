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
// tr.pipe(process.stdout);
tr.on('data', (chunk) => console.log(`ondata: ${chunk}`));

tr.write('a');
tr.write('b');
tr.write('c');
tr.end();

// ondata: A
// ondata: B
// ondata: C
// ondata: !

const fs = require('fs');
const r = fs.createReadStream('./jquery.js');
const tr2 = new TR();
r.pipe(tr2).pipe(process.stdout);
