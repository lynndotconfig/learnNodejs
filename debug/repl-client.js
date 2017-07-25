var net = require('net')
var socket = net.connect(1377)

process.stdin.setRawMode(true)
process.stdin.pipe(socket)
socket.pipe(process.stdout)

socket.on('once', function () {
	process.stdin.destroy()
})