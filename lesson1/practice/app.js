//引用express模块
var express = require('express');
//实例化一个express应用
var app = express();
//定义一个express应用的行为
app.get('/',function(req,res){
	res.send('hello world');
});
//让应用监听3000端口，函数是监听成功后的回调
app.listen('3000',function(){
	console.log('app is listening at port 3000');
});
