var express = require('express');
var app = express();

app.use('/virtualPath',express.static('static'));//第一个参数可选，不填则文件都在/static里面

app.use(function(req,res,next){
	res.status(404).send('sorry,cant find this page');
});
app.listen(8888,function(){
	console.log(666)
});