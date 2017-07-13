var util = require('util')
var events = require('events')

var AudioDevice = {
	play: function (track) {
		console.log('playing --- ', track)
		// stub: trigger playback through iTunes, mpg123, etc
	},
	stop: function () { console.log('stop ---- ')}
}

function MusicPlayer() {
	this.playing = false
	events.EventEmitter.call(this)
}

util.inherits(MusicPlayer, events.EventEmitter)

var musicPlayer = new MusicPlayer()

const play = function (track) {
	this.play = true
	AudioDevice.play(track)
}

musicPlayer.on('play', play)

musicPlayer.on('stop', function () {
	this.playing = false
	AudioDevice.stop()
})

// multi monitor event
const playing = function (track) {
	console.log('Track now is playing: ', track)
}
musicPlayer.on('play', playing)

// on call once
const init = function () {
	console.log('init......')
}
musicPlayer.once('play', init)

// error process
// 如果没有错误监听器，那么发生错误是默认行为是打印一个堆栈并推出
const handleError = function(err) {
	console.log('handleError: ', err)
}
musicPlayer.on('error', handleError)

// remove listener
// 需要指定引用
musicPlayer.removeListener('play', play)

musicPlayer.emit('play', 'The Roots - The Fire')

setTimeout(function () {
	musicPlayer.emit('stop')
}, 1000)
setTimeout(function (){
	musicPlayer.emit('error', 'unable to play')
}, 2000)

