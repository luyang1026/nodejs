const fs = require('fs-extra');
const path = require('path');
//删除
// fs.unlink('tmp/1.js',function(err){
// 	if(err)console.log(err);
// 	console.log('done')
// })
//查看文件状态
// fs.stat('tmp/1.js',function(err,stats){
// 	console.log(`stats:${JSON.stringify(stats,4,null)}`)
// })
// 重命名
// fs.rename('tmp/renamed.js','tmp/rename.js',function(err){
// 	if(err)throw err;
// 	console.log('done')
// })
// 打印当前目录
//读取文件
var items = []
var cwd = process.cwd();
console.log(cwd)
// fs.walk('tmp')
// 	.on('data',function(item){
// 		var filePath = path.relative(cwd,item.path)
// 		items.push(filePath)
// 	})
// 	.on('end',function(){
// 		console.log(items)
// 	})
var files = fs.walkSync('tmp').forEach((filePath)=>{
	// return './' + path.relative(cwd,filePath);
	require(`./${path.relative(cwd,filePath)}`);
})
console.log(files)