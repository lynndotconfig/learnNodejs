var http = require('http')
var httpProxy = require('http-proxy')

var proxy = new httpProxy.createProxyServer({
	target: 'http://localhost:3000'
})

var wsProxy = new httpProxy.createProxyServer({
	target: 'http://localhost:3001'
})

var proxyServer = http.createServer(function (req, res) {
	proxy.web(req, res)
})

proxyServer.on('upgrade', function (req, socket, head) {
	wsProxy.ws(req, socket, head)
})

proxyServer.listen(9000)