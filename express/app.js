var express = require('express');
var app = express();
var users = [];

users.push({ name: 'Tobi' });
users.push({ name: 'Loki' });
users.push({ name: 'Jane' });

app.get('/',function(req,res){
	res.send('hello world!');
});
app.locals.title = 'ly';
app.locals.title = 'ly2';
console.log(app.locals.title);	
app.listen(8881)
// var server = app.listen(8881,function(){
// 	var address = server.address();
// 	for(var name in address){
// 		console.log(address[name])
// 	}
// });