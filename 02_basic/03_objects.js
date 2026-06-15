// Singleton -> if i create object with contructor then it creates Singlton, but if i use literals for creating object that time Singlton will not create.
Object.create // this is object using constructor

//Object literals

const mySym= Symbol("myKey")
const jsUser={
    name : "Neeraj",  // here name,age,email etc. are consider as String
    //mySym : "Key", // not represent symbol, it consider as String
    [mySym] : "Key", // now it represents Symbol
    age : 25,
    email : "Neeraj@gmail.com",
    "city" : "Noida",
    isLoggedIn : false,
    loginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email); // Neeraj@gmail.com
// console.log(jsUser["email"])  // Neeraj@gmail.com , we can access like this also
// console.log(jsUser.city); // Noida
// console.log(jsUser["city"]); //Noida

// console.log(jsUser[mySym]); // Key // it act as symbol
// jsUser.age=21 //we can override value like this
// Object.freeze(jsUser) // we can freez the object(jsUser) like this that can not be override now
// jsUser.age=30
// console.log(jsUser)

//** function */
 jsUser.greeting=function(){
    console.log("Hello JS User");
 }
//  console.log(jsUser.greeting) // [Function (anonymous)] , give the reference not object
//  console.log(jsUser.greeting()) //Hello JS User (in next line)-> undefined

 jsUser.greetingTwo=function(){
    console.log(`Hello JS User,${this.name}`);
 }
 console.log(jsUser.greetingTwo()); // Hello JS User,Neeraj (in next line)-> undefined

 









