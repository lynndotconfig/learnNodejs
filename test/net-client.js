var net = require('net')
var host = '127.0.0.1'
var port = 3000

var client = net.connect(port, host, function () {
	console.log('client connected...')
})

client.on('data', function (data) {
	console.log('client on data')
})

client.on('end', function (data) {
	console.log('client on end')
})