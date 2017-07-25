var assert = require('assert')

it('should run a test', function () {
	assert('a' === 'a')
})

it('should allow a test to fail', function () {
	assert(true)
	assert.equal('a', 'b', 'Bad test')
})

it('should run a test after the failed test', function () {
	assert(true)
})