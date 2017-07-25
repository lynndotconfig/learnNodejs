function curry(fn) {
	var args = [].slice.call(arguments, 1)
	return function () {
		return fn.apply(null, args.concat([].slice.call(arguments, 0)))
	}
}

function add(n1, n2) {
	return n1 + n2
}

var newAdd = curry(add, 5)
console.log(newAdd(4))