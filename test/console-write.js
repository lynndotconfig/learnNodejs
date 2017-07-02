var readline = require('readline')
console.info('Node.js - readline.write() Usage')


var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.write('Dfelete me! wait for 3 seconds...')
var timeoutLength = 3 * 1000

var timeout = setTimeout(function () {
	// 模仿ctl + u 快捷键， 删除之前所写行
	rl.write(null, { ctrl: true, name: 'u'})
}, timeoutLength)