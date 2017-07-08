var dgram = require('dgram')
var host = '127.0.0.1'
var port = 12345

var message = new Buffer('UDP Client to Server: Hello From Server')

var client = dgram.createSocket('udp4')

client.send(message, 0, message.length, port, host, function (err, bytes) {
	if(err) {
		throw err
	}
	console.log('udp messge sent to %s:%s', host, port)
	console.log(bytes)
	client.close()
})

client.on('close', function () {
	console.log('client disconnected')
})