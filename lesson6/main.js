var fibonacci = function(n){
	if(n==0){
		return 0;
	}
	if(n==1){
		return 1;
	}
	if(n>10){
				throw    new Error('n should >= 0')

	}
	return fibonacci(n-1)+fibonacci(n-2);
}
var r = fibonacci(11);
if(require.main==module){
	var n = process.argv[2];
}
exports.fibonacci = fibonacci;