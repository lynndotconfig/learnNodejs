// copy file by stream

var fs = require('fs')
var readable = fs.createReadStream('processor.js')

var writeable = fs.createWriteStream('copy-file.js')

readable.pipe(writeable)

// 通过设置Ｓetimeout
setTimeout(function () {
	console.log('stop writing to copy-file.js')
	readable.unpipe(writeable)
	console.log('auto close pip stream')
	writeable.end()
}, 1000)