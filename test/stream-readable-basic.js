var fs = require('fs')

var rs = fs.createReadStream('processor.js')

rs.setEncoding('utf8')
rs.on('readable', function () {
	console.log('readable event emitted.')
})

rs.on('data', function (chunk) {
	console.log('data event emitted.')
	var buf
	while(null !== (buf = rs.read())) {
		console.log('data: ', chunk)
		console.log('length: ', chunk.length)
	}
	rs.pause()
	// 接下来３秒内不会读数据
	setTimeout(function () {
		console.log('现在数据会重新开始流动')
		rs.resume()
		console.log('read: ', chunk)
	}, 3000)
})

rs.on('error', function () {
	console.log('error event emitted.')
})

rs.on('end', function () {
	console.log('end event emitted.')
})

rs.on('close', function () {
	console.log('close event emitted.')
})
