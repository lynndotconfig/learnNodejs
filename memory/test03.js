/*
* node test03.js
* 会发现，heapTotal和heapUsed的变化极小，rss的变化比较大
* 这是因为buffer不经v8的内存分配机制，所以不会有对大小的限制
*/
var showMem = function () {
	var mem = process.memoryUsage()
	var format = function (bytes) {
		return (bytes / 1024 / 1024).toFixed(2) + 'MB'
	}
	console.log('Process: HeapTOtal', format(mem.HeapTOtal),
		' heapUsed ', format(mem.heapUsed), ' rss ', format(mem.rss))
	console.log('------------------------------------------------------')
}

var useMem = function () {
	var size = 200 * 1024 * 1024
	var buffer = new Buffer(size)
	for(var i = 0; i < size; i++) {
		buffer[i] = 0
	}
	return buffer
}

var total = []

for(var i = 0; i < 15; i++) {
	showMem()
	total.push(useMem())
}

showMem()