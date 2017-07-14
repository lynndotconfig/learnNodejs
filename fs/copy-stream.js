var fs = require('fs')
var readable = fs.createReadStream('./file.txt')
var writable = fs.createWriteStream('./dst.txt')
readable.pipe(writable)