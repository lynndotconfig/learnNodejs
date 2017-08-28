 // 测试方法：
 // 1. 运行 'node test05.js'， 多次刷新浏览器

// 在进程中使用node-memwatch后， 每次进行全堆垃圾回收是，将会触发一次’stats‘时间，
// 这个事件会传递内存中的统计信息。
// 如果经过连续5次垃圾回收后，内存仍然没有被释放，这意味着有内存泄露的产生，
// node-memwatch会触发一个leak事件。

var memwatch = require('memwatch')
var http = require('http')
var heapdump = require('heapdump')

memwatch.on('leak', function (info) {
	console.log('leak:')
	console.log(info)
})

memwatch.on('stat', function (stats) {
	console.log('stats: ')
	console.log(stats)
})

var leakArray = []

var leak = function () {
	leakArray.push("leak " + Math.random())
}

http.createServer(function (req, res) {
	leak()
	res.writeHeader(200, {'Content-Type': 'text/plain'})
	res.end()
}).listen(1337)

console.log('server running on localhost:1337')