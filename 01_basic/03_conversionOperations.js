let score1=33
console.log(typeof score1) // number
console.log(typeof(score1)) // number // we can write this also


let score2="33"
console.log(typeof score2) // string 
let valueInNumber1= Number(score2)
console.log(typeof valueInNumber1) // number

console.log("================")

let score3="33abc"
console.log(typeof score3) // string
let valueInNumber2=Number(score3)
console.log(typeof valueInNumber2) // output is number, but in 33abc , alphabet is also there. For checking this typeOf is used 
console.log(valueInNumber2) // NaN (Not a Number)

// score3="33" -> 33
// score3="33abc" -> NaN
// score3= true -> 1 ; false -> 0
// score3=undefined -> NaN

console.log("================")
let isLoggedIn=""; // if 0/""/null -> false ; if "abc"/5 -> true
let valueInBoolean= Boolean(isLoggedIn)
console.log(valueInBoolean) // true
console.log(typeof valueInBoolean) // boolean
