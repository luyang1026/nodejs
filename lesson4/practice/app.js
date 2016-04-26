var superagent = require('superagent'),
	cheerio = require('cheerio'),
	eventproxy = require('eventproxy'),
	express = require('express'),
	url = require('url');

var cnodeUrl = 'https://cnodejs.org/';

var app = express();

app.get('/',function(req,res,next){
	superagent.get(cnodeUrl)
		.end(function(error,sres){
			if(error){
				return console.log(error);
			}
			var topicUrls = [];
			var $ = cheerio.load(sres.text);
			$('#topic_list .topic_title').each(function(idx,ele){
				topicUrls.push(url.resolve(cnodeUrl,$(ele).attr('href')));
			})
			
			var ep = new eventproxy();
			ep.after('topic_html',topicUrls.length,function(topics){
				topics = topics.map(function(topicPair){
					var topicUrl = topicPair[0];
					var topicHtml = topicPair[1];
					var $ = cheerio.load(topicHtml);
					return {
						title: $('.topic_full_title').text().trim(),
						href: topicUrl,
						comment1: $('.reply_content').eq(0).text().trim(),
					}
				});
				res.send(topics);
			});

			topicUrls.forEach(function(topicUrl){
				superagent.get(topicUrl)
					.end(function(error,sres){
						if(error){
							console.log(error);
						}
						ep.emit('topic_html',[topicUrl,sres.text])
					})
			});
		});
});
app.listen(8888,function(){
	console.log(666);
})