var express = require('express');
var app = express();

app.get('/',function(req,res,next){
	console.log('hi')
	next('route');
},function(){
	console.log('never')
})
app.get('/',function(req,res){
	res.send(11)
})
app.use(function(err,req,res,next){
	console.log(1010)
})
app.listen(8888,function(){
	console.log(666)
})