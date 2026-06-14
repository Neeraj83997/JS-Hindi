// ** Primitive data type **
// 7-> String, Boolean, Number, Symbol, null, BigInt, Undefiened
const score=100
const scores=100.3

const isLoggedIn=false
const outSideTemp=null
let userEmail;

const id1=Symbol("123")
const id2=Symbol("123")
console.log(id1==id2) //false

const bigInteger=2172196487236574378568473657157n

// ** Reference Type (Non Primitive) **
// Objects, Array, Functions 

//Object
let MyObj={
  name:"Nrj",
  age:25
}

//Array
const heros=["Salman","Akhay","Ranveer"]

//Function
const MyFunc= function(){
    console.log("hello world")
}

console.log(typeof MyFunc) //function
console.log(typeof heros) //Object
console.log(typeof MyObj) //Object
console.log(typeof outSideTemp) //Object
console.log(typeof bigInteger) //bigint
console.log(typeof scores) //number







