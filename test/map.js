function map(arr, func) {
	var res = []
	for (var i = 0; i < arr.length; i++) {
		res.push(func(arr[i]))
	}
	return res
}

var mapped = map([1, 3, 5, 7, 8], function (n) {
	return n = n + 1
})

console.log(mapped)

var mapped2 = map(['one', 'two', 'three', 'four'], function (item) {
	return "(" + item + ")"
})

console.log(mapped2)