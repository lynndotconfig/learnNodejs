var Database = require('./db')
var client = new Database('./dev.db')

client.on('load', function () {
	var foo = client.get('foo')
	client.set('bar', 'my first value', function (err) {
		if(err) return console.log(err)
		console.log('process success')

	})

	client.del('dz')
})