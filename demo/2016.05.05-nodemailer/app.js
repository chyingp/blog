#!/usr/local/bin/node
var nodemailer = require('nodemailer');
var http = require('http');
var Mustache = require('mustache');
var fs = require('fs');
var querystring = require('querystring');

var user = '';  // 改成对应的账号
var pass = '';  // 改成对应的密码

process.chdir(__dirname);

var renderTable = function(items){
	var tmpl = fs.readFileSync('./table.tmpl').toString();
	var idx = 0;
	var result = Mustache.render(tmpl, {
		items: items,
		errorRate: function(){
			return (this.error_times / this.visit_times).toFixed(2)
		},
		idx: function(){
			return ++idx;
		},
		td: 'style="border: 1px solid #e5e5e5; line-height: 20px; padding: 8px;"'
	});
	return result;
};

var dateTimeToParam = function(date){
	var arr = [date.getFullYear(), date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
	return arr.map(function(value){
		return value >= 10 ? value : '0' + value;
	}).join('');
};

var parseDate = function(date){
	return dateTimeToParam(date);
};

var getDailyReport = function(callback){
	
	var debug = require('debug')('getReport');
	
	var curDate = new Date();
	var defaultBeginDate = new Date( curDate.getFullYear(), curDate.getMonth(), curDate.getDate() );
	var defaultEndDate = new Date( curDate.getFullYear(), curDate.getMonth(), curDate.getDate(), 23, 59, 59 );
	var queryObj = {
		client_env: 4,
		query_flag: 1,
		begin_date: parseDate(defaultBeginDate),
		end_date: parseDate(defaultEndDate)
	};
	var reportUrl = 'http://monitor.wqiquan.com/api/retcode/report?' + querystring.stringify(queryObj);
	
	debug('请求发出');
	
	http.get(reportUrl, function(res){
		var resThunk = '';

		res.setEncoding('utf8');

		res.on('data', function(thunk){
			resThunk += thunk;
		});

		res.on('end', function(){
			debug('请求成功返回');
			debug('请求返回内容:\n ' + resThunk);
			var data = JSON.parse(resThunk);
			callback && callback(data);
		});
	});
};
 
var sendMail = function(emailContent){
	var debug = require('debug')('sendMail');

	// create reusable transporter object using the default SMTP transport 
	var conf = {
		host: 'smtp.exmail.qq.com',
	    port: 587,
	    // secure: true, // use SSL 
	    auth: {
	        user: user,
	        pass: pass
	    }
	};
	var transporter = nodemailer.createTransport(conf);
	var curDate = new Date();
	var dateDesc = [curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()].join('.');
	 
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: '"监控" <report@microption.com.cn>', // sender address 
	    to: 'casper@microption.com.cn', // list of receivers 
	    subject: '前端CGI监控报表-' + dateDesc, // Subject line 
	    html: emailContent // html body 
	};

	debug('邮件发送开始');
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    debug('邮件发送成功');
	    console.log('Message sent: ' + info.response);
	});
};

var run = function(){
	sendMail('hello');
	return;

	getDailyReport(function(data){
		var result = renderTable(data.data.items);
		sendMail(result);
	});
};

run();
