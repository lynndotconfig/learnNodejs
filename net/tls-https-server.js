var fs = require('fs')
var https = require('https')

var options = {
	key: fs.readFileSync('server.pem'),  // rsa证书
	cert: fs.readFileSync('server-cert.pem'),  // 公钥
	ca: [ fs.readFileSync('client-cert.pem') ],  // 公钥
	requestCert: true
}

var server = https.createServer(options, function (req, res) {
	var authorized = req.socket.authorized ? 'authorized' : 'unauthorized'
	res.writeHead(200)
	res.write('Welcome ! You are ' + authorized + '\n')
	res.end()
})


server.listen(8000, function () {
	console.log('Server listening')
})