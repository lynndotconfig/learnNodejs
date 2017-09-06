let mori = require('mori')
let vc = mori.vector(1, 2, 3, 4)
console.log(vc)

let first = mori.get(vc, 0)
let second = mori.get(vc, 1)
console.log(first, second)

let vca = mori.conj(vc, 5)
console.log(vca)
console.log(vc)

let pop = mori.pop(vc)
console.log(pop)
console.log(vc)

console.log('first: ', mori.first(vc))
console.log('rest: ', mori.rest(vc))

let subvca = mori.subvec(vc, 1)
let subvcb = mori.subvec(vc, 1, 2)
console.log(subvca, subvcb)

let m0 = mori.hashMap('zero', 0, 'one', 1)
let zero = mori.get(m0, 'zero')
let one = mori.get(m0, 'one')
console.log(zero, one)

let m1 = mori.assoc(m0, mori.vector(1, 2), 2)
let vec12 = mori.get(m1, mori.vector(1, 2))
console.log(m0)
console.log(m1)
console.log(vec12)

let updatevc = mori.assoc(mori.vector(1, 2, 3), 1, 8)
console.log(updatevc)


