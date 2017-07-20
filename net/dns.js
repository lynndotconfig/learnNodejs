var dns = require('dns')

// dns.lookup('www.manning.com', function (err, address) {
// 	if(err) {
// 		console.log('Error: ', err)
// 	} else {
// 		console.log('Address: ', address)
// 	}
// })
// Address:  35.166.24.88

dns.resolve('www.manning.com', function (err, address) {
	if(err) {
		console.log(err)
	} else {
		console.log('Address: ', address)
	}
})
// Address:  [ '35.166.24.88' ]
