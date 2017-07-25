var http = require('http')
var server = http.createServer()

server.on('request', function (req, res) {
	res.end('hello world')
})

server.listen(3000)
console.log('server listening on port 3000')

var net = require('net')
var repl = require('repl')
net.createServer(function (socket) {
	var r = repl.start({
		input: socket,
		output: socket,
		terminal: true,
		useGlobal: true
	})
	r.on('exit', function () {
		socket.end()
	})
	r.context.server = server
}).listen(1377)
console.log('repl listening on port 1377')