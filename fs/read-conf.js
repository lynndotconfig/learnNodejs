var fs = require('fs')
// fs.readFile('./config.json', function (err, buf) {
// 	if(err) {
// 		throw err
// 	}
// 	var config = JSON.parse(buf.toString())
// 	doThising(config)
// })

var conf = JSON.parse(fs.readFileSync('./config.json').toString())
doThising(config)



