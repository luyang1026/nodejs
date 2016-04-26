var superagent = require('superagent'),
	cheerio = require('cheerio'),
	eventproxy = require('eventproxy'),
	express = require('express'),
	url = require('url');

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
		})
});
app.listen(8888,function(){
	console.log(666);
})