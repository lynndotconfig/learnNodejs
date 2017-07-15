var fs = require('fs')
fs.watch('./watchdir', console.log) // 记录文件的新增和修改
fs.watchFile('./watchdir', console.log) // 在目标为目录时，不记录文件的更改