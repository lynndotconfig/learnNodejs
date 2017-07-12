var stream = require('stream')
var Readable = stream.Readable
var util = require('util')

util.inherits(MemoryStream, stream)

function MemoryStream(interval) {
	this.readable = true

	setInterval(function () {
		var data = process.memoryUsage()
		data.date = new Date()
		this.emit('data', JSON.stringify(data) + '\n')
	}.bind(this), interval)
}

var memoryStream = new MemoryStream(250)
var wrappedStream = new Readable().wrap(memoryStream)

wrappedStream.pipe(process.stdout)