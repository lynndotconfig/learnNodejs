var fs = require('fs')

var rs = fs.createReadStream('processor.js')
var ws = fs.createWriteStream('test-pip.txt')
rs.setEncoding('utf-8')
rs.on('data', function (chunk) {
	console.log('data event emitter')
	if(ws.write(chunk) === false) {
		// 如果将缓冲区数据写入目标文件操作没有完成，　则暂停读
		console.log('write chunk...')
		rs.pause()
	}
})

ws.on('drain', function () {
	console.log('drain event emitter')
	rs.resume()
})

ws.on('finish', function () {
	console.log('finish event emitter')
})

rs.on('end', function () {
	console.log('end event emitter')
	ws.end()
})