var stream = require('stream')
var util = require('util')
var express = require('express')
var app = express()

function StatStream(limit) {
	stream.Readable.call(this)
	this.limit = limit
}

util.inherits(StatStream, stream.Readable)
// 等同于
// StatStream.prototype = Object.create(stream.Readable.prototype, {
// 	constructor: { value: StatStream}
// })

StatStream.prototype._read = function (size) {
	if(this.limit === 0) {
		//Done
		this.push(null)
	} else {
		
		// if(this.limit < 8) {
		// 	process.exit()
		// }
		// console.log(this.limit)
		this.push(util.inspect(process.memoryUsage()))
		this.push('\n')
		this.limit = this.limit - 1
	}
}

app.get('/', function (req, res) {
	var statStream = new StatStream(10)
	statStream.pipe(res)
})

if(!module.parent) {
	console.log('Listening on port: ', 3000)
	app.listen(3000)	
}

module.exports = app