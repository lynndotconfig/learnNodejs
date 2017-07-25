var stream = require('stream')
var rs = new stream.Readable
rs.push('Stream')
rs.push('Readable')
rs.push('Push()')
rs.push('Pipe()')
rs.push('\n')
rs.push(null)
rs.pipe(process.stdout)