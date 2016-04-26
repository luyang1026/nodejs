var async = require('async');

var concurrencyCount = 0;
function fetchUrl (url,callback) {
	concurrencyCount ++;
	var delay = Math.floor(Math.random()*10000000%2000);
	setTimeout(function(){
		concurrencyCount--;
		callback(null,url+'html content');
	}, delay)
}
var urls = [];
for (var i = 0; i < 30; i++) {
	urls.push('http://datasource_'+i);
}

async.mapLimit(urls,8,function(item){
	console.log(item) })