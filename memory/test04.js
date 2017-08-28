 // 测试方法：
 // 1. 运行 'node test04.js'， 多次刷新浏览器
 // 2. 执行 'kill -USR2 NODE_PID', 生成内存使用快照
 // 3. 使用chrome浏览器的开发者工具, 在'profile'面板，load内存快照，
 // 4. 分析内存使用情况

var http = require('http')
var heapdump = require('heapdump')
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