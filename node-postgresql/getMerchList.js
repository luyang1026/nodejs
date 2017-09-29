var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');

var app = express();
var conString = 'postgres://settleadmin:settle88@192.168.103.15/settle';

var queryStr = 'select * from st_merch limit 1;';

app.use(bodyParser.urlencoded({extended:true}));
app.all('/merchList',function(req,res){
	console.log(typeof req.body);

	var page = req.body.page;
	var pageSize = req.body.pageSize;

	queryStr = 'select * from st_merch limit '+pageSize+' offset '+page*pageSize+';'
	// console.log(queryStr)
	// res.send('');
	// return;

	res.set('Access-Control-Allow-Origin','*')
	var response = [];
	pg.connect(conString,function(err,client,done){
		if(err){console.log(err)}
		client.query(queryStr,function(err,result){
			response = response.concat(result.rows);
			res.json(response);
		})
		done();
	});

})

app.listen(8888,function(){
	console.log(666)
})