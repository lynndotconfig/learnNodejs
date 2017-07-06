process.on('SIGHUP', function () {
	console.log('Got SIGHUP signal.')
})

setTimeout(function () {
	console.log('Existing...')
	process.exit(0)
	console.log('exited pid: ', process.id)
}, 1000)

process.kill(process.pid, 'SIGHUP')
console.log('i am exiting on pid: ', process.pid)