var EventEmitter = require('events').EventEmitter

function MusicPlayer(track) {
	this.track = track
	this.playing = false

	for(var methodName in EventEmitter.prototype) {
		this[methodName] = EventEmitter.prototype[methodName]
	}
}

// // 另一种合并的方法(待测试)
// const merge = function (a, b) {
// 	if(a && b) {
// 		for (var key in b) {
// 			a[key] = b[key]
// 		}
// 	}
// 	return a
// }

MusicPlayer.prototype = {
	toString: function () {
		if(this.playing) {
			return 'Now playing: ' + this.track
		} else {
			return 'Stopped'
		}
	}
}

var musicPlayer = new MusicPlayer('Girl Talk - Still Here')
musicPlayer.on('play', function () {
	this.playing = true
	console.log(this.toString())
})
musicPlayer.emit('play')