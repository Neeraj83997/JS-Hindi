function setUserName(userName){
    //db calls
    this.userName=userName
    console.log("called");
    
}

function createUser(userName,email,password){
   // setUserName(userName)  // this method is not calling here// we just give reference here not calling
                           // it prints 'called' // actually it is calling. when it calls it goes to call stack on top. o/p -> createUser { email: 'abc@gmail.com', password: 123 }
                           // After executing this mehod ,it remove from call stack without holding the value of variable. that's why we use call method .
    //setUserName.call(userName)  // to hold the referencr we use call. but the output is again -> createUser { email: 'abc@gmail.com', password: 123 } 
                               // means username is not coming yet ,means no change in object. // Because the variable remove from memory after execut this funtion immediately.
                               // So we have to pass my this not  of setUserName's this         

    setUserName.call(this,userName) 

    this.email=email
    this.password=password

}
const usr=new createUser('Neeraj','abc@gmail.com',123)
console.log(usr);

