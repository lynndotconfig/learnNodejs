var net = require('net')
var host = '127.0.0.1'
var port = 3000

var client = net.connect(port, host, function () {
	console.log('client connected')
	client.write('client: hello , i am client')
	// client.end()
})

client.on('data', function (data) {
	console.log(data.toString())
	console.log('sock.bytesRead:', client.bytesRead)
	client.end()
})


client.on('end', function () {
	console.log('client disconnected')
})