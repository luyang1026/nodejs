var async = require('async');

var concurrencyCount = 0;
function fetchUrl (url,callback) {
	concurrencyCount ++;
	var delay = Math.floor(Math.random()*10000000%2000);
	console.log('现在并发数是',concurrencyCount,'正在抓取',url,'耗时'+delay+'毫妙')
	setTimeout(function(){
		concurrencyCount--;
		callback(null,url+'html content');
	}, delay)
}
var urls = [];
for (var i = 0; i < 30; i++) {
	urls.push('http://datasource_'+i);
}

async.mapLimit(urls,5,function(url,callback){
	fetchUrl(url,callback);
},function(err,result){
	console.log(err,result);
})