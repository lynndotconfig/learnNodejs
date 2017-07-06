var cp = require('child_process')
var n = cp.fork('child-process-fork-sub.js')

n.on('message', function (m) {
	console.log('parent got message', m)
})

n.send({main: 'sub'})
console.info()