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
