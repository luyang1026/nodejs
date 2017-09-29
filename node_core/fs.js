var fs = require('fs');
var txt = fs.readFileSync('sample.txt');
console.log(txt);//<Buffer 77 65 20 6b 69 6c 6c 20 6f 72 20 77 65 20 64 69 65 21>
console.log(txt.toString());//we kill or we die!

txt = fs.readFile('sample.txt',function(err,data){//non-blocking;
	if(err){
		console.log(err);
		return;
	}
	console.log(data.toString())////we kill or we die!
});