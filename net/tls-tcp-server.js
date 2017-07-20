/*
create certification by openssl for tls

Usage:

	openssl genrsa -out server.pem 1024
	openssl req -new -key server.pem -out server-csr.pem
	openssl x509 -req -in server-csr.pem -signkey server.pem -out server-cert.pem

	openssl genrsa -out client.pem 1024
	openssl req -new -key client.pem -out client-csr.pem
	openssl x509 -req -in client-csr.pem -signkey client.pem -out client-cert.pem


test ssl/tls
	openssl s_client -connect 127.0.0.1:8000 -CAfile ./server-cert.pem

*/

var fs = require('fs')
var tls = require('tls')

var options = {
	key: fs.readFileSync('server.pem'),  // rsa证书
	cert: fs.readFileSync('server-cert.pem'),  // 公钥
	ca: [ fs.readFileSync('client-cert.pem') ],  // 公钥
	requestCert: true
}

var server = tls.createServer(options, function (cleartextStream) {
	var authorized = cleartextStream.authorized ? 'authorized': 'unauthorized'
	console.log('Connected: ', authorized)
	cleartextStream.write('Welcome!\n')
	cleartextStream.setEncoding('utf8')
	cleartextStream.pipe(cleartextStream)
})

server.listen(8000, function () {
	console.log('Server listening')
})