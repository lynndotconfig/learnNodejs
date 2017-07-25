var net = require('net')
var host = '127.0.0.1'
var port = 3000

console.log('now create server...')
net.createServer(function (sock) {
	console.log('server on %s:%s', host, port)
	sock.on('data', function (data) {
		console.log('socket on data...')
	})
	sock.on('close', function (data) {
		console.log('socket on close....')
	})
}).listen(port, host)