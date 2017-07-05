var processor = {
	timeoutId: null,
	performProcessing: function () {
		console.log('on')
	},
	process: function () {
		clearTimeout(this.timeoutId)
		var that = this
		this.timeoutId = setTimeout(function () {
			that.performProcessing()
		}, 1000)
	}
}

for(var i = 0; i < 5; i++)
{
	processor.process()
}
