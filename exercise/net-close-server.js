var net = require('net')

var host = '127.0.0.1'
var port = 3000

var bSockData = true

var server = net.createServer()

server.on('listening', function () {
	console.log('server listening on port: %s', port)
	console.log('server address: %j', server.address())
})

server.on('connection', function (sock) {
	console.log('server has a new connection from %s:%s', sock.remoteAddress, sock.remotePort)
	// console.log('socke address: ', sock.address())
	// console.log('sock localAddress:', sock.localAddress)
	// console.log('sock local port: ', sock.localPort)

	if(bSockData) {
		// 恢复data事件的操作
		sock.resume()
		bSockData = false
	} else {
		// 暂停data事件的操作
		sock.pause()
		bSockData = true
	}
	server.getConnections(function (err, count) {
		if(err) {
			console.log(err.message)
		} else {
			console.log('current connections is ', count)
		}
	})

	sock.on('data', function (data) {
		console.log('sock bytesRead: ', sock.bytesRead)
		console.log('data: %s:%s', sock.remoteAddress, data)
		sock.write('serer write: hello, i am server')
		// server.close()
	})
})

server.on('close', function () {
	console.log('server now is closed')
})

server.on('error', function (err) {
	console.log('error occured:', err.message)
})

server.listen(port, host)
