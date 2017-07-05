function Polygon(sides) {
	// 当使用new运算符调用构造函数时， 构造函数内部用的this对象会指向新创建的实例
	// 在没有使用new运算符调用构造函数的情况下， 由于该this是运行时绑定的，
	// 一次调用的构造函数会将该对象绑定到当前环境的一个全局对象上
	if(this instanceof Polygon) {
		this.sides = sides
		this.getArea = function () {
			return 0
		}
	} else {
		return new Polygon(sides)
	}
}

function Rectangle(width, height) {
	Polygon.call(this, 2)
	this.width = width
	this.height = height
	this.getArea = function () {
		return this.width *  this.height
	}
}

// 使用原型链
Rectangle.prototype = new Polygon()
var rect = new Rectangle(5, 10)
console.log(rect.sides)