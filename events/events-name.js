var util = require('util')
var events = require('events')

function MusicPlayer() {
	events.EventEmitter.call(this)
	this.on(MusicPlayer.events.play, this.play,bind(this))
}

util.inherits(MusicPlayer, events.EventEmitter)

var e = MusicPlayer.events = {
	play: 'play',
	pause: 'pause',
	stop: 'stop',
	ff: 'ff',
	rw: 'rw',
	addTack: 'add-track'
}

MusicPlayer.prototype.play = function () {
	this.playing = true
}

var musicPlay = new MusicPlayer()

musicPlay.on(e.play, function () {
	console.log('Now playing')
})

musicPlay.emit(e.play)