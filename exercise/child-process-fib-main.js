var cp = require('child_process')
var child = cp.fork('child-process-fib-sub.js')

child.on('message', function (m) {
	console.log('fib:', m)
})

var input = parseInt('10')
child.send({input: 1})
for (var i = 0; i < input; i++) {
	child.send({input: i})
}