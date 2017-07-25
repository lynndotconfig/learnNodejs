var net = require('net')
var host = '127.0.0.1'
var port = 6688

var clientList = []
console.log('now we create chat server')

var server = net.createServer()

server.on('connection', function (client) {
	clientList.push(client)
	client.name = client.remoteAddress + ':' + client.remotePort
	console.log('client: ', client.name)
	broadcast('hi, '　+ client.name + ' join in !\r\n', client)
	client.write('hi! ' + client.name + '!\r\n')

	client.on('data', function (data) {
		broadcast(client.name + ' say: ' + data.toString(), client)
	})
	client.on('end', function () {
		broadcast('hi ' + client.name + ' quit!\r\n', client)
		clientList.splice(clientList.indexOf(client), 1)
	})
})

function broadcast(message, client) {
	var clearup = []
	for(var i = 0, len = clientList.length; i < len; i++) {
		if(clientList[i].writable) {
			clientList[i].write(message)
		} else {
			clearup.push(clientList[i])
			clientList[i].destroy()
		}
	}

	for(var i=0, len=clearup.length; i < len; i++) {
		clientList.splice(clientList.indexOf(clearup[i]), 1)
	}
}

server.listen(port,host)

// Usage:

// open a terminal and type 'telnet 127.0.0.1 6688' after run this code