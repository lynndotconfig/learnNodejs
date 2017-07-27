var app = require('./app')
var cluster = require('cluster')

if(cluster.isMaster) {
	var totalWorkers = require('os').cpus().length - 1
	console.log('Running %d total workers', totalWorkers)

	for(var i = 0; i < totalWorkers; i += 1) {
		cluster.fork()
	}

	cluster.on('exit', function (worker) {
		console.log('Worker %d died', worker.id)
		cluster.fork()
	})
} else {
	console.log('Worker PID: ', process.pid)
	app.listen(process.env.PORT || 3000)
}