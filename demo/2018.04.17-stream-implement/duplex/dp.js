const { Duplex } = require('stream');

class DP extends Duplex {
  constructor (options = {}) {    
    super(options);
    this._innerChunks = [];
  }

  _write (chunk, encoding, callback) {
    this._innerChunks.push({chunk, encoding});
    callback();
  }

  _read () {
    this._innerChunks.forEach(item => {
      let upperCasedAlphabet = item.chunk.toString().toUpperCase();
      this.push(upperCasedAlphabet);
    });
    this.push(null); // end
  }
}

const dp = new DP();
dp.pipe(process.stdout);

dp.write('a');
dp.write('b');
dp.write('c');
dp.end();