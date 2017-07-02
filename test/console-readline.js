var readline = require('readline')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question('what is your name ? ', function (answer) {
	console.log('My name is ', answer)
	rl.close()
})

// 下面这段代码不会执行，因为上一个函数中rl.close()切回了系统上下文环境
rl.question('how old are your ? ', function (answer) {
	console.log('I am ', answer)
	rl.close()
})