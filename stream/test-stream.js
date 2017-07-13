var assert = require('assert')
var fs = require('fs')
var CSVParse = require('./transform-stream')

var parser = new CSVParse()
var actual = []

fs.createReadStream(__dirname + '/sample.csv')
  	.pipe(parser)

process.on('exit', function () {
	actual.push(parser.read())
	actual.push(parser.read())
	actual.push(parser.read())

	var expectd = [
		{id:"1", name:"wp", age:"28", major:"network"},
		{id:"2", name:"lq", age:"27", major:"software"}, 
		{id:"3", name:"bk", age:"27", major:"mediecine"}	
	]

	assert.deepEqual(expectd, actual)
})