console.info('async queue')

var async = require('async')

var q = async.queue(function (task, callback) {
	console.log('worker is processing task', task.name)
	callback()
}, 5)

q.push({name: 'foo',}, function (err) {
	console.log('finished processing foo')
})
q.push({name: 'bar',}, function (err) {
	console.log('finished processing bar')
})
q.push({name: 'cap',}, function (err) {
	console.log('finished processing cap')
})
q.push({name: 'egg',}, function (err) {
	console.log('finished processing egg')
})
q.push({name: 'app',}, function (err) {
	console.log('finished processing app')
})

q.empty = function () {
	console.log('no more tasks waiting')
}

q.drain = function (){
	console.log('all tasks have been processed.')
}
