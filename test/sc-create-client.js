var net = require('net')
var host = '127.0.0.1'
var port = 3000

var client = net.connect(port, host, function () {
	console.log('client connected')
	client.write('client write: Hello Server')
})

client.on('data', function (data) {
	console.log(data.toString())
	client.end()
})

client.on('end', function () {
	console.log('client disconnected')
})