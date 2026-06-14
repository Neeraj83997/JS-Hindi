const score=100
//console.log(score) //100
const balance=new Number(100)
// console.log(balance) // [Number: 100]
// console.log(balance.toFixed(2)) //100.00

const str=balance.toString();
//console.log(str) // 100

const otherNumber=123.835125
const strr=otherNumber.toPrecision(5)
//console.log(strr) //5-> 123.84, 3-> 124, 2-> 1.2e+2

const hundreds=1000000
// console.log(hundreds.toLocaleString()) // 1,000,000 -> US based
// console.log(hundreds.toLocaleString('en-IN')) // 10,00,000 -> India based

//===========Math=====================

// console.log(Math) //Object [Math] {}
// console.log(Math.round(4.6)) // 5
// console.log(Math.abs(-4)) // 4-> -ive to +ive , not vice versa
// console.log(Math.ceil(4.1)) // 5 -> only top value
// console.log(Math.floor(4.9)) // 4 -> only bottom value
// console.log(Math.max(5,9,3,7)) // 9
// console.log(Math.min(5,9,3,7)) // 3

console.log(Math.random()) // value b/w 0 to 1 , it can be 0 or 1 also
console.log((Math.random()*10) + 1) // *10 beacuse we want 1 to 10, +1 because random() can give 0 or 1 also,
// like it can give 0.021 so to avoid the 0 we provide +1
console.log(Math.floor((Math.random()*10) + 1))
const min=10
const max=20
console.log(Math.floor(((Math.random())*(max-min +1))+min)) //(max-min +1) -> *10 + 1(avoid 0/1) -> set the range


