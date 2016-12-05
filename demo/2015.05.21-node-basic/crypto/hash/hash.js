var crypto = require('crypto');
var fs = require('fs');

// 查看当前支持的hash算法，比如 md5, sha1 等
var hashes = crypto.getHashes();
console.log(hashes);

var md5 = crypto.createHash('md5');
md5.update('程序猿小卡', 'utf8');  // 如果没有提供编码，且前面的是字符串，编码默认就是utf8
console.log( md5.digest('hex') );


var file = fs.createReadStream('./content.txt', {encoding: null});

md5 = crypto.createHash('md5');
// process.stdout.setEncoding('utf8');
file.pipe(process.stdout);
// file.pipe(md5).pipe(process.stdout);
