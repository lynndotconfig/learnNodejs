// var ex = require('child_process').execFileSync
// var stdout = ex('echo', ['hello']).toString()
// console.log(stdout)

// var sp = require('child_process').spawnSync
// var ps = sp('ps', ['aux'])
// var grep = sp('grep', ['node'], {
// 	input: ps.stdout,
// 	encoding: 'utf8'
// })

// console.log(grep)

// var ex = require('child_process').execSync
// var stdout = ex('ps aux | grep node').toString()
// console.log(stdout)

var ex = require('child_process').execFileSync

try {
	ex('ls', [',/non-existent-dir'], {
		encoding: 'utf8'
	})
} catch (err) {
	console.log('exit status was: ', err.status)
	console.log('stderr', err.stderr)
}