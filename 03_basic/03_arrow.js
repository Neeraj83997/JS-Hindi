const user={
    userName : "Ramu",
    price : 999,
    welcomeMessage : function(){
       console.log(`${this.userName}, welcome to website`);
       console.log(this);
       
    }
}
// user.welcomeMessage() //Ramu, welcome to website
// user.userName="Sam" // now current usserName context would be change, so this keyword will take the Sam
// user.welcomeMessage(); //Sam, welcome to website
//console.log(this); // {} return empty object because no one context is there in global but in browser inspect it shows window object

// function f(){
//     const userr="Neeraj"
//     //console.log(this);
//     console.log(userr);  // Neeraj
//     console.log(this.userr); //undefined
// }
// f()


// const c=function(){
//     const userr="Neeraj"
//     console.log(this.userr); //undefined
// }
// c()

// const c=() =>{
//     const userr="Neeraj"
//     console.log(this.userr); //undefined
//     console.log(this); // {}
// }
// c()

// const addi= (num1,num2)=>{
//     console.log(num1+num2); //5
// }
// addi(3,2)

// const addi= (num1,num2)=> num1+num2 //4 or
// //const addi= (num1,num2)=> (num1+num2) //4
// console.log(addi(2,2) ); //4

const addi= (num1,num2)=> ({userNamee : "Raju", id : 101}) //{ userNamee: 'Raju', id: 101 } //if we write an object in the function definition, then we have to provide parenthesis ()
console.log(addi(2,2) ); //4