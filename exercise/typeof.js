function typeOf (o) {
	// typeof 返回值有： "undefined", "number", string", "boolean", "object", function", "undefined"
	// typeof 在检测null值是会返回"object"

	// toString 返回的字符串中是否包含特有的标识字符来判断对象的类型

	// 此方法只能来判断js中基本的数据类型和内置对象， 对于自定义的对象是无效的。
	// 因此要检测非内置对象， 只能使用constructor属性和instanceof运算符来实现

	var _toString = Object.prototype.toString
	var _type = {
		"undefined": "undefinded",
		"number": "number",
		"boolean": "boolean",
		"string": "string",
		"[object Function]": "function",
		"[object RegExp]": "regexp",
		"[object Array]": "array",
		"[object Date]": "date",
		"[object Error]": "error"
	}
	return _type[typeof o] || _type[_toString(o)] || (o ? "object": "null")
} 

function isNumber (o) {
	return typeof value === 'number' && isFinite(o)
}

var obj = {}, name
obj.hasOwnProperty = null
for (name in obj) {
	console.log(name + ':' + obj[name])
}