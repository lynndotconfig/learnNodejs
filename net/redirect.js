var http = require('http')
var https = require('https')
var url = require('url')
var request

function Request() {
	this.maxRedirect = 10
	this.redirects = 0
}

Request.prototype.get = function (href, callback) {
	var uri = url.parse(href)
	var options = { host: uri.host, path: url.path }
	var httpGet = uri.protocol === 'http:' ? http.get: https.get

	console.log('GET:', href)

	function processResponse(response) {
		if(response.statusCode > 300 && response.statusCode < 400) {
			if(this.redirects >= this.maxRedirect) {
				this.error = new Error('Too many redirects for: ' + href)
			} else {
				this.redirects++
				href = url.resolve(options.host, response.headers.location)
				return this.get(href, callback)
			}
		}

		response.url = href
		response.redirects = this.redirects

		console.log('Redirected: ', href)

		function end() {
			console.log('Connection End')
			callback(this.error, response)
		}

		response.on('data', function (data) {
			console.log('Got data: ', data.toString())
			console.log('length: ', data.length)
		})

		response.on('end', end.bind(this))
	}

	httpGet(options, processResponse.bind(this))
		.on('error', function (err) {
			callback(err)
		})
}

request = new Request()

request.get('http://baidu.com', function (err, res) {
	if(err) {
		console.log(err) 
	} else {
		console.log('Fetched URL: ', res.url, 'with', res.redirects, 'redirects')
		process.exit()
	}
})