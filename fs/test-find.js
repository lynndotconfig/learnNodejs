var find = require('./find')

// finsSync
try{
	var results = find.findSync(/file.*/, '.')
	console.log(results)
} catch(err) {
	console.log(err)
}


// bind Callback

var results = find.find(/file.*/, '.', function (err, result) {
	if(err) return console.log(err)
	console.log(result)
})
