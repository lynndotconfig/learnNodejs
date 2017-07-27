var httpProxy = require('http-proxy')
var proxy = httpProxy.createProxyServer({
	target: 'http://localhost:3000'
})

proxy.on('error', function (err) {
	console.log('Error: ', err)
})

proxy.listen(9000)
