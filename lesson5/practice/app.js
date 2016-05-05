var superagent = require('superagent'),
	cheerio = require('cheerio'),
	eventproxy = require('eventproxy'),
	express = require('express'),
	url = require('url');
	async = require('async');

var cnodeUrl = 'https://cnodejs.org/';

var app = express();

app.get('/',function(req,res){
	superagent.get(cnodeUrl)
		.end(function(error,sres){
			var topicUrls = [];
			var $ = cheerio.load(sres.text);
			$('#topic_list .topic_title').each(function (idx, element) {
			  var $element = $(element);
			  var href = url.resolve(cnodeUrl, $element.attr('href'));
			  topicUrls.push(href);
			});

			var i = 0;
			async.mapLimit(topicUrls,5,function(url,callback){
				superagent.get(url)
					.end(function(error,res){
						if(error){
							callback(error);
						}else{
							console.log('已抓取'+(++i)+'个地址','当前地址'+url);
							var $ = cheerio.load(res.text);
							var data = {
								title: $('.topic_full_title').text().trim(),
								href: url,
								comment1: $('.reply_content').eq(0).text().trim(),
							}
							callback(null,data);
						}
					})
			},function(err,data){
				res.send(data);
			});
		});
});
app.listen(8881,function(){
	console.log(666);
})