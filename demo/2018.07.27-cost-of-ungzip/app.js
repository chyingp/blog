let fs = require('fs');
let zlib = require('zlib');

let buff = fs.readFileSync('./base_6534b0f.js');
let gzipedContent;

function getCost (fn) {
  let start = new Date();
  fn();
  let end = new Date();
  return parseInt(end - start);
}

let costOfGzip = getCost(() => {
  gzipedContent = zlib.gzipSync(buff);
});

let costOfGunzip = getCost(() => {
  zlib.gunzipSync(gzipedContent)
});

console.log(`cost of gzip: ${costOfGzip}ms`);
console.log(`cost of gunzip: ${costOfGunzip}ms`);

// gzip前，文件大小：482kb
// cost of gzip: 27ms
// cost of gunzip: 4ms