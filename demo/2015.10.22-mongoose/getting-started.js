var mongoose = require('mongoose');

// 连接数据库，数据库名字为test
mongoose.connect('mongodb://localhost/test');

// 检测连接是否成功
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('database test is connected !');
});

