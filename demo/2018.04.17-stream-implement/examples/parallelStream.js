const { Transform } = require('stream');

class ParallelStream extends Transform {
  constructor (transformer) {
    super({objectMode: true});
    this.transformer = transformer; 
    this.runningTask = 0;
    this.stop = null;
  }

  _transform (chunk, encoding, done) {
    this.runningTask++;
    this.transformer(chunk, encoding, this.push.bind(this), this._onComplete.bind(this));
    done();
  }

  _flush (done) {
    if (this.runningTask > 0) {
      this.stop = done;
    } else {
      done();
    }
  }

  _onComplete (err) {
    this.runningTask--;

    if (err) {
      return this.emit('error', err);
    }
    
    if (this.runningTask === 0) {
      this.stop && this.stop();
    }
  }
}


const through = require('through2');
const request = require('request');
const fs = require('fs');
const split = require('split');

fs.createReadStream('./url.txt')
  .pipe(split())
  .pipe(new ParallelStream((chunk, encoding, push, done) => {
    request.head(chunk, (err, response) => {
      push(`url: ${chunk}, status: ${err ? 'down': 'up'}\n`);
      done();
    });
  }))
  .pipe(process.stdout)
  .on('finish', () => console.log('finished'));

// url: http://v.qq.com, status: down
// url: http://id.qq.com, status: up
// url: http://ke.qq.com, status: up