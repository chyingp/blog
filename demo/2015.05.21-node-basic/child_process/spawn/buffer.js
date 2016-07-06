var ls= require('child_process').spawn('aria2c', ['http://www.zhuamei.net/data/attachment/album/201512/12/064032ykm19pkek1k1o0fs.jpg']);
ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});