var mysql = require('mysql');
var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'school',
	port:3306
});
conn.connect();
var query = 'select * from grade';
conn.query(query,function(err,rows,fields){
	if(err)throw err;
	console.log(fields);
});
conn.end();