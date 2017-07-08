var fs = require('fs')
var ws = fs.createWriteStream('test-write-file.text')
ws.write('stream-')
ws.write('writable-')
ws.write('-test')
setTimeout(function () {
	ws.end()
}, 1000)