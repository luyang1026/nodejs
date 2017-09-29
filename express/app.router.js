var express = require('express');
var app = express();

var address;

app.post('/user',function(res,res){
	res.send('get a post request'+address.host);
})
app.get('/user',function(res,res){
	res.send('get a get request'+address.host);
})
app.post('/',function(res,res){
	res.send('get a post request'+address.host);
})
app.get('/',function(res,res){
	res.send('get a get request'+address.host);
})

var server = app.listen(8801,function(){
	address = server.address();
	console.log(666)
})