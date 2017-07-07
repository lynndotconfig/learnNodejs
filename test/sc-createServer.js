var net = require('net')
var host = '127.0.0.1'
var port = 3000

console.log('meili')

net.createServer(function (sock) {
	console.log('server listening on ' + host + '：' + port)
	console.log('connected: ' + sock.remoteAddress + ':' + sock.remotePort)
	sock.on('data', function (data) {
		console.log('data ' + sock.remoteAddress + ':' + data)
		sock.write('server write: ' + data)

	})
	sock.on('close', function (data) {
		console.log('colsed: ' + sock.remoteAddress + ':' + sock.remotePort)
	})

}).listen(port, host)
