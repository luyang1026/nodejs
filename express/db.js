var express = require('express');
var pg = require('pg');
var URL = require('url');
var qs = require('querystring');
var conString = 'postgres://settleadmin:settle88@182.92.204.161/settle'

var app = express();

app.all('/merchant',function(req,res){
	res.set('Access-Control-Allow-Origin','*')
	var post = '';
	req.on('data',function(chunk){
		post += chunk;
	});
	console.log('onpost')
	req.on('end',function(){
		post = qs.parse(post);

		var query = '';
		res.send(post)
		// pg.connect(conString,function(err,client,done){
		// 	if(err){
		// 		return console.log(error)
		// 	}
		// 	client.query('select * from st_merch limit 3;',function(err,result){
		// 		done();// call 'done()' to return the client back to the poll
		// 		var r = (result.rows[0]);
		// 		res.send(post)
		// 	})
		// })


	})

})

app.listen(8899,function(){
	console.log(666)
})