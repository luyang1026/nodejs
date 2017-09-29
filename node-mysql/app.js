var mysql = require('mysql');
var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'play',
	port:3306
});
conn.connect();
var query = 'select * from message';
conn.query(query,function(err,rows,fields){
	if(err)throw err;
	// console.log(rows[0].content);
});
conn.end();
var obj = {a:1};
for(let v of obj)
	console.log(v);
// console.log(typeof process.env);
// console.log(process.env.PATH);
