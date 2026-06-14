// ** Primitive data type **
// 7-> String, Boolean, Number, Symbol, null, BigInt, Undefiened
const score=100
const scores=100.3

const isLoggedIn=false
const outSideTemp=null
let userEmail;

const id1=Symbol("123")
const id2=Symbol("123")
//console.log(id1==id2) //false

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

// console.log(typeof MyFunc) //function
// console.log(typeof heros) //Object
// console.log(typeof MyObj) //Object
// console.log(typeof outSideTemp) //Object
// console.log(typeof bigInteger) //bigint
// console.log(typeof scores) //number

//** Stack(Primitive[getting copy]) and Heap(Non Primitive[getting reference]) memory  **
let myName= "Neeraj" //stored in stack 
let nickName=myName  //nickName stored in stack with copy of myName

// console.log(nickName) //Neeraj 
// nickName="NRJ" //Now change the value which is copied earlier
// console.log(nickName) // NRJ
// console.log(myName) //Neeraj

let user1={  //user@gmail.com stored in heap memory and refered by user1
  userEmailId: "user@gmail.com",
  user1Upi: "user1@ybl"
}
let user2=user1 // the same user@gmail.com in heap memory refered by user2
console.log(user2.userEmailId) //user@gmail.com
user2.userEmailId="Neeraj@gmail.com" //we change the value of heap i.e from user@gmail.com to Neeraj@gmail.com and this value already refered by user1
console.log(user2.userEmailId) //Neeraj@gmail.com
console.log(user1.userEmailId) //Neeraj@gmail.com






