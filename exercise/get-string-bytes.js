// 遍历每个字符， 根据字符编码逐个累加字节数
String.prototype.lengthB = function () {
	var b = 0, l = this.length
	if(l) {
		for (var i = 0; i < l; i++) {
			if(this.charCodeAt(i) > 255) {
				b += 2
			} else {
				b++
			}
		}

		// // 另外两中方法：
		// for (var i = 0; i < l; i++) {
		// 	var c = this.charAt(i)
		// 	if (escape(c).length > 4) {
		// 		b += 2
		// 	} else if(c != '\r') {
		// 		b++
		// 	}
		// }

		// for (var i = 0; i < l; i++) {
		// 	var c = this.charAt(i)
		// 	if (/^[\u0000-\u00ff]$/.test(c)) {
		// 		b++
		// 	} else {
		// 		b += 2
		// 	}
		// }
		return b
	} else {
		return 0
	}
}


// 替换双字节字符。具体做法是将每个双字节字符替换为"**", 在计算总长度
String.prototype.lengthB = function () {
	var s = this.replace(/[^\x00-\xff]/g, "**")
	return s.length
}

var s = "1234567890 字符串对象的长度"
console.log(s.lengthB())