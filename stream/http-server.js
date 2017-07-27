var http = require('http')
var fs = require('fs')

// // simple
// http.createServer(function (req, res) {
// 	fs.readFile(__dirname + '/index.html', function (err, data) {
// 		if(err) {
// 			res.statusCode = 500
// 			res.end(String(err))
// 		} else {
// 			res.end(data)
// 		}
// 	})
// }).listen(8000)

// // by stream
// http.createServer(function (req, res) {
// 	fs.createReadStream(__dirname + '/index.html').pipe(res)
// }).listen(8000)

// by stream with gzip
var zlib = require('zlib')
http.createServer(function (req, res) {
	res.writeHead(200, {'content-encoding': 'gzip'})
	fs.createReadStream(__dirname + '/index1.html')
		.on('error', function (err) {
			console.trace()
			console.log('stack: ', err.stack)
			console.log('error: ', err)
			res.writeHead(404)
			res.end(String({data: 'not found'}))
		})
		.pipe(zlib.createGzip())
		.pipe(res)
}).listen(3000)