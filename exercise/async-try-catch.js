console.info(' --- nodejs async try catch ---')

// try {
// 	setTimeout(function () {
// 		var data = a / 0
// 	}, 1000)
// } catch (err) {
// 	console.log(err)
// }

setTimeout(function () {
	try {
		var data = a / 0	
	} catch (err) {
		console.log('some error')
	}
})