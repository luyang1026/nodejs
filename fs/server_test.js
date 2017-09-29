const http = require('http');
var server = http.createServer((req,res)=>{
	var body = '';
	req.setEncoding('utf8');

	req.on('data',(chunk)=>{
		body+=chunk;
	});

	req.on('end',()=>{
		console.log(JSON.parse(body));
		res.write(body);
		res.end();
	})
});
server.listen(8000);