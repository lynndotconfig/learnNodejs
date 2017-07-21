var cp = require('child_process')

// cp.execFile('echo', ['hello', 'world'], function (err, stdout, stderr) {
// 	if(err) {
// 		console.error(err)
// 	} else {
// 		console.log('stdout', stdout)
// 		console.log('stderr', stderr)
// 	}
// })

// var child = cp.spawn('echo', ['hello', 'world'])
// child.on('error', console.log)
// child.stdout.pipe(process.stdout)
// child.stderr.pipe(process.stderr)

// var cat = cp.spawn('cat', [ 'messy.txt' ])
// var sort = cp.spawn('sort')
// var uniq = cp.spawn('uniq')

// cat.stdout.pipe(sort.stdin)
// sort.stdout.pipe(uniq.stdin)
// uniq.stdout.pipe(process.stdout)

// same as

// cp.exec('cat messy.txt | sort | uniq', function (err, stdout, stderr) {
// 	if(err) {
// 		console.error(err)
// 	} else {
// 		console.log('stdout', stdout)
// 		console.log('stderr', stderr)
// 	}
// })


// reference count and child process
// var fs = require('fs')
// var outFd = fs.openSync('./longrun.out', 'a')
// var errFd = fs.openSync('./longrun.err', 'a')

// var child = cp.spawn('./longrun', [], {
// 	detached: true,  // 分离子进程
// 	// 不为子进程提供输出，但是从stdout, stderr获得输出
// 	// 分别对应： stdin, stdout, stderr
// 	stdio: [ 'ignore', 'outFd', 'errFd']  // 默认 stdio: 'pipe'
// })

// child.unref()  // 移除子进程在父进程中的引用

// 运行可执行文件
console.log('hello', process.argv[2])

cp.execFile('hello.bat', ['billy'], function (err, stdout) {
	if(err) {
		console.error(err)
	} else {
		console.log('stdout: ', stdout)
	}
})