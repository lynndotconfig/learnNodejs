var http = require('http')
var makePool = require('./pooler')
var runJob = makePool('./worker')

http.createServer(function (req, res) {
	runJob('some dummy job', function (err, data) {
		if(err) return res.end('got an error: ', err.message)
		res.end(data)
	})
}).listen(3000)