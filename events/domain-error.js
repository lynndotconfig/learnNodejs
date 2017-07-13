var util = require('util')
var domain = require('domain')
var events = require('events')
var audioDomain = domain.create()

function AudioDevice () {
	events.EventEmitter.call(this)
	this.on('play', this.play.bind(this))
}

util.inherits(AudioDevice, events.EventEmitter)

AudioDevice.prototype.play = function () {
	this.emit('error', 'not implemented yet')
}

function MusicPlayer() {
	events.EventEmitter.call(this)

	this.AudioDevice = new AudioDevice()
	this.on('play', this.play.bind(this))

	this.emit('error', 'No audio tracks are available')
}

util.inherits(MusicPlayer, events.EventEmitter)

MusicPlayer.prototype.play = function () {
	this.AudioDevice.emit('play')
	console.log('Now playing')
}

audioDomain.on('error', function (err) {
	console.log('audioDomain error: ', err)
})

audioDomain.run(function () {
	var musicPlayer = new MusicPlayer()
	musicPlayer.play()
})