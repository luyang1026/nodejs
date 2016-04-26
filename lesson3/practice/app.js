var express = require('express'),
	superagent = require('superagent'),
	cheerio = require('cheerio');

var app = express();

app.get('',function(req,res,next){
	//用superagent去获取网页
	superagent.get('https://cnodejs.org')
		.end(function(err,sres){//收到响应后
			if(err){
				next(err);
			}
			var $ = cheerio.load(sres.text);
			var items = [];
			$('#topic_list .cell').each(function(idx,ele){
				items.push({
					title:$(ele).find('.topic_title').attr('title'),
					href:$(ele).find('.topic_title').attr('href'),
					author:$(ele).find('img').attr('title')

				});
			});
			res.send(items);
		});
})

app.listen('3000',function(){
	console.log('listening');
});