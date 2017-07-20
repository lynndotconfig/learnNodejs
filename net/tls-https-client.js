var fs = require('fs')
var os = require('os')
var https = require('https')

var options = {
	key: fs.readFileSync('client.pem'),
	cert: fs.readFileSync('client-cert.pem'),
	ca: [ fs.readFileSync('server-cert.pem') ],
	servername: os.hostname(),
	port: 8000,
	path: '/',
	method: 'GET'
}

var req = https.request(options, function (res) {
	res.on('data', function(d) {
		process.stdin.write(d)
	})
})

req.end()

req.on('error', function (e) {
	console.log(e)
})