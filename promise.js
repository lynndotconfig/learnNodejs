var PromiseC = function () {
  // 队列用户存储执行的回调函数
  this.queue = []
  this.isPromise = true
}

PromiseC.prototype.then = function (fulfiledHandler, errorHandler, progressHandler) {
  var handler = {}
  if (typeof fulfiledHandler === 'function') {
    handler.fulfiled = fulfiledHandler
  }
  if (typeof errorHandler === 'function') {
    handler.error = errorHandler
  }
  // if (typeof progressHandler === 'function') {
  //   handler.progress = progressHandler
  // }
  this.queue.push(handler)
  return this
}

var Deferred = function () {
  this.promise = new PromiseC()
}

// 完成态
Deferred.prototype.resolve = function (obj) {
  var promise = this.promise
  var handler
  while ((handler = promise.queue.shift())) {
    if(handler && handler.fulfiled) {
      var ret = handler.fulfiled(obj)
      if(ret && ret.isPromise) {
        ret.queue = promise.queue
        this.promise = ret
        return
      }
    }
  }
}

// 失败态
Deferred.prototype.reject = function (err) {
  var promise = this.promise
  var handler
  while ((handler = promise.queue.shift())) {
    if(handler && handler.error) {
      var ret = handler.error(err)
      if(ret && ret.isPromise) {
        ret.queue = promise.queue
        this.promise = ret
        return
      }
    }
  }
}

// 生成回调函数
Deferred.prototype.callback = function () {
  var that = this
  return function (err, file) {
    if(err) {
      return that.reject(err)
    }
    that.resolve(file)
  }
}

// 以读取文件为例
var fs = require('fs')
var readFile1 = function (file, encoding) {
  var deferred = new Deferred()
  fs.readFile(file, encoding, deferred.callback())
  return deferred.promise
}

var readFile2 = function (file, encoding) {
  var deferred = new Deferred()
  fs.readFile(file, encoding, deferred.callback())
  return deferred.promise
}

readFile1('content.txt', 'utf8').then(function (file1) {
  return readFile2(file1.trim(), 'utf8')
}, function (err) {
  console.log(err)
}).then(function (file2) {
  console.log(file2)
}, function (err) {
  console.log(err)
})

// 将API Promise化
var fs = require('fs')
var smooth = function (method) {
  return function () {
    var deferred = new Deferred()
    var args = Array.prototype.slice.call(arguments, 0)
    args.push(deferred.callback())
    method.apply(null, args)
    return deferred.promise
  }
}

var readFile = smooth(fs.readFile)
readFile('content.txt', 'utf8').then(function (file1) {
  return readFile(file1.trim(), 'utf8')
}, function (err) {
  console.log(err)
}).then(function (file2) {
  console.log(file2)
}, function (err) {
  console.log(err)
})

