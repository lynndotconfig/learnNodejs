process.on('message', function (m ) {
	console.log('child got message:', m)
})

process.send({sub: 'main'})
console.info()