var fs = require('fs')
fs.readdir('../stream', function (err, files) {
	console.log(files)
})