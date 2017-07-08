var dgram = require('dgram')
var host = '127.0.0.1'
var port = 12345

var server = dgram.createSocket('udp4')
server.on('listening', function () {
	 var address = server.address()
	console.log('udp server is listening on %j', address)
})

server.on('message', function (message, remote) {
	console.log('upd server received from %s:%s', remote.address, remote.port)
	console.log('--', message.toString())
	console.log('emit "message" event...')
	server.close()
})

server.on('error', function (err) {
	console.log('server error:\n', err.stack)
	server.close()
})

server.on('close', function () {
	console.log('udp server closed')
})

server.bind(port, host)