// 通过函数属性
function memfactorial(n) {
	if(!memfactorial.cache) {
		memfactorial.cache = {
			'0': 1,
			'1': 1
		}
	}
	if(!memfactorial.cache.hasOwnProperty(n)) {
		memfactorial.cache[n] = n * memfactorial(n - 1)
	}
	return memfactorial.cache[n]
}

var re = memfactorial(6)
console.log(re)


// 通过闭包
var fibonacci = (function () {
	var memo = [0, 1]
	var fib = function (n) {
		var result = memo[n]
		if( typeof result !== 'number') {
			result = fib(n - 1) + fib(n - 2)
			memo[n] = result
		}
		return result
	}
	return fib
})()


// // python version
// def memo(func):
// 	cache = {}
// 	def wrap(*args):
// 		if args not in cache:
// 			cache[args] = func(*args)
// 		return cache[args]
// 	return wrap

// @demo
// def fib(i):
// 	if i < 2:
// 		return 1
// 	return fib(i - 1) + fib(i - 2)
