const { Readable } = require('stream');

const arr = [];

class RandomStream extends Readable {
  constructor (options) {
    super(options);
  }

  _read () {
    arr.push(`[RandomStream] _read() is called`);
    let num = Math.random();
    this.push(num.toString() + ' ', 'utf8');

    if (num <= 0.1) {
      this.push(null); // end
    }
  }
}

const rs = new RandomStream();
rs
.on('readable', () => {
  arr.push(`[readable] before loop`);

  let chunk;
  while ((chunk = rs.read()) !== null) {
    arr.push(`chunk read: ${chunk}`);
  }

  arr.push(`[readable] after loop`);
})
.on('end', () => {
  arr.push(`[end]`);
  console.log(arr.join('\n'));
})

/*
[RandomStream] _read() is called
[readable] before loop
[RandomStream] _read() is called
chunk read: 0.9455902221151478 0.4752694596188789
[RandomStream] _read() is called
chunk read: 0.9372690495391933
[RandomStream] _read() is called
chunk read: 0.053975422709547694
[readable] after loop
[readable] before loop
[readable] after loop
[readable] before loop
[readable] after loop
[readable] before loop
[readable] after loop
[end]
*/