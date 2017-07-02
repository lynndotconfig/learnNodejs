var readline = require('readline')

rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.setPrompt('NodeJS>')
rl.on('line', function (line) {
	switch(line.trim()) {
		case 'name':
			console.log('king!')
			break
		case 'code':
			console.log('Node.js')
			break
		case 'time':
			console.log('2017')
			break
		default:
			console.log('Say What? I might have heard `' + line.trim() + '`')
			break
	}
	rl.prompt()
}).on('close', function () {
	console.log('Have a great day !')
	process.exit(0)
})