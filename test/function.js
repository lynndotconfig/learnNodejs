// var array = [ 4, 5 ]

// var add = function () {
// 	var i, sum = 0
// 	for(i = 0; i < arguments.length; i++) {
// 		sum += arguments[i]
// 	}
// 	return sum
// }

// var sum = add.apply({}, array)
// console.log(sum)


// var F = function (string) {
// 	this.status = string
// }

// F.prototype.get = function () {
// 	return this.status
// }

// var obj = {
// 	status: 'obj'
// }
// var f = new F('test')

// // var status = F.prototype.get.apply(obj)
// var status = f.get()
// console.log(status)


// function f(x) {
// 	var a = x
// 	var b = function () {
// 		return x
// 	}
// 	return b
// }

// var c = f(1)
// console.log(c())

// function f(x) {
// 	var a = x
// 	var b = function () {
// 		return a
// 	}
// 	a++
// 	return b
// }
// var c = f(1)
// console.log(c())


// function f (x) {
// 	var a = []
// 	for (var i = 0; i < x.length; i++) {
// 		var temp = x[i]
// 		// a.push(function () {
// 		// 	console.log(temp, ' + ', x[i])
// 		// })
// 		a.push((function (temp, i) {
// 			return function () {
// 				console.log(temp, " + ", x[i])				
// 			}
// 		})(temp, i))
// 	}
// 	return a
// }

// function e () {
// 	var a = f(["a", "b", "c"])
// 	for(var i =0; i < a.length; i++) {
// 		a[i]()
// 	}
// }
// e()


// // 同一个闭包通过分别引用能够在当前环境中生成多个闭包
// function f( x ) {
// 	var temp = x
// 	return function ( y ) {
// 		temp += y
// 		console.log(temp)
// 	}
// }

// var a = f(50)
// var b = f(100)

// a(5)
// b(10)


// function f() {
// 	var x = 5
// 	// return function () {
// 	// 	return x
// 	// }
// }

// var a = f()
// var b = f()
// console.log(a === b)

// Function.prototype.method = function (name, func) {
// 	if(!this.prototype[name]){
// 		this.prototype[name] = func
// 		return this	
// 	}
// }

// Number.method('integer', function () {
// 	return Math[this < 0 ? 'ceil': 'floor'](this)
// })

// var a = -10 / 3
// console.log(a.integer())
// console.log(typeof (-10 / 3))
// console.log((-10 / 3).integer())

// var a = 2
// function f(x) {
// 	return x
// }
// console.log(f(a, a = a * a))
// console.log(f(a))

// var f = (function () {
// 	var t
// 	return function () {
// 		t = t ? t :new Date()
// 		return t
// 	}
// })()

// var a = f()
// var b = f()

// console.log(a === b)

// var f = function () {
// 	var t = new Date()
// 	f = function () {
// 		return t
// 	}
// 	return f()
// }

// var memoizer = function (memo, formula) {
// 	var m = memo
// 	var recur = function (n) {
// 		var result = m[n]
// 		if (typeof result !== 'number') {
// 			console.log(m)
// 			// console.log(n)
// 			result = formula(recur, n)
// 			m[n] = result
// 		}
// 		return result
// 	}
// 	return recur
// }

// var fibonacci = memoizer([0, 1], function (recur, n) {
// 	console.log(n)
// 	return recur(n - 1) + recur(n - 2)
// })

// var factorial = memoizer([1, 1], function (recur, n) {
// 	return n * recur(n - 1)
// })

// console.log(fibonacci(5))

Function.prototype.method = function (name, func) {
	if(!this.prototype[name]){
		this.prototype[name] = func
		return this	
	}
}

Function.method('curry', function () {
	var slice = Array.prototype.slice
	var args = slice.apply(arguments), that = this
	return function (){
		return that.apply(null, args.concat(slice.apply(arguments)))
	}
})

var add = function () {
	var i, sum = 0
	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	return sum
}

var addl = add.curry(2, 3)
console.log(addl(3))