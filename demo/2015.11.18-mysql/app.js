var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();
 
connection.query('select * from user', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].name);
});
 
connection.end();