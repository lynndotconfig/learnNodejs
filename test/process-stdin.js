process.stdin.setEncoding('utf8')
process.stdin.on('readable', function () {
	var chunk = process.stdin.read()
	if(chunk !== null) {
		process.stdout.write('Print data: ' + chunk + '\n')
	}
})

process.stdin.on('end', function () {
	process.stdout.write('end\n')
})

console.log(' -- process stdin ------')