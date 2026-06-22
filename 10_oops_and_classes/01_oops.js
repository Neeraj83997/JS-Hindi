// => javascript and classes
// => OOPs
// => Object :  collection of properties and methods like toLowerCase()
// => Why use OOPs
// => parts of OOPs
//     a) Object literal
//     b)  Constructor function
//     c) Prototypes
//     d) Classes
//     e) Instances -> new, this

// => 4 pillars
//     Abstraction -> fetch()
//     Encapsulation 
//     Inheritance
//      Polymorphism


 //a) Object literal
const user={
    userName: "Raj",
    age: "12",
    getUserDetails: function (){
                console.log("Gor user details");
                console.log(`${this.userName}`); // Raj
                console.log(this); //  {
                                        // userName: 'Raj',
                                        // age: '12',
                                        // getUserDetails: [Function: getUserDetails]
                                        // }
                
    }
}
// console.log(user.getUserDetails());
// console.log(this);  // {}  // in global context here value og 'this' is empty, but in brouser it give window object


//     b)  Constructor function
const userr=function (userName,age,isLoggedIn) {
     this.userName=userName
     this.age=age
     this.isLoggedIn=isLoggedIn
         this.greeting= function(){
        console.log(`Welcome ${this.userName}`);
     }
      return this // when we use new keyword like:  new userr('Neeraj',23,true) , we can ignore this line

}
const user1= new userr('Neeraj',23,true)
const user2=new userr('Ram',33,false)
console.log(user1);
console.log(user2);





   