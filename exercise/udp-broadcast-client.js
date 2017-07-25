var dgram = require('dgram')
var host = '255.255.255.255'
var port = 12345

var message = new Buffer('UDP Client to Server: Hello From Server')

var client = dgram.createSocket('udp4')

// 设置广播
client.bind(function () {
	client.setBroadcast(true)
})
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