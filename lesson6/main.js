var fibonacci = function(n){
	if(n==0){
		return 0;
	}
	if(n==1){
		return 1;
	}
	return fibonacci(n-1)+fibonacci(n-2);
}
var r = fibonacci(22);
if(require.main==module){
	var n = process.argv[2];
	console.log('fibonaci('+n+')='+fibonacci(n));
}
exports.fibonacci = fibonacci;