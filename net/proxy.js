var http = require('http')
var url = require('url')

http.createServer(function (req, res) {
	console.log('start request: ', req.url)
	var options = url.parse(req.url)
	options.headers = req.headers
	var proxyRequest = http.request(options, function (proxyResponse) {
		proxyResponse.on('data', function (chunk) {
			console.log('proxyResponse length: ', chunk.length)
			res.write(chunk, 'binary')
		})
		proxyResponse.on('end', function () {
			console.log('proxyResponse end')
			res.end()
		})

		res.writeHead(proxyResponse.statusCode, proxyResponse.headers)
	})

	res.on('data', function (chunk) {
		console.log('in request length: ', chunk.length)
		proxyRequest.write(chunk, 'binary')
	})

	res.on('end', function () {
		console.log('original request ended')
		proxyRequest.end()
	})
}).listen(8080)
