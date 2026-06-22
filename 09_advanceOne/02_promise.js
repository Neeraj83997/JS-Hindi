// Notes
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// mtlb jo bhi hm task dete h wo abhi k abhi queue me lag k complete nhi hoga.
// Queue me to lg gya h, lekin abhi k abhi usko load nhi kiya gya h, abhi complete nhi ho skta wo. mtlb promise kr diya h)
// Promise JavaScript में एक ऐसा ऑब्जेक्ट है जो किसी asynchronous operation (ऐसा काम जो कुछ समय बाद पूरा होता है) के future result को दर्शाता है।
// [Simple : A Promise represents the future outcome of an asynchronous operation—either a successful result or an error. ] application example-  cryptographic operations, network, file system

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.



// const myPromise=new Promise(function(resolve,reject){
//     //you can do as async task like DB calls, cryptography, Network
//     setTimeout(function () {
//         console.log("Async task is completed"); // after completing its task, next line will be execute
//         resolve() // this line calls to then function // rsolve is directly connected with then() method
//     },1000)
    
// })
// myPromise.then(function() {
//     console.log("Promise consumed");
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function (){
//         console.log("Async 2 task");
//         resolve()
//     },1000)
// }).then(function (){
//     console.log("Async 2 consumed");
    
// })

// const prmis=new Promise(function (resolve,reject){
//      setTimeout(function(){
//         console.log("A3 task");
//         resolve({name : 'Neeraj' , age : 22})
//      },1000)

// })
// prmis.then(function(user){
//     console.log(user);
    
// })

// const pr4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err=false
//         if(!err){
//             console.log("A4 task");
//             resolve({name: 'Ram', age: 33})
//         }else{
//             console.log("ERROR: Something went wrong");
            
//         }

//     },1000)
// })
// pr4.then((user)=>{
//     console.log(user);
//     return user.name
// }).then(function(myUserName){
//     console.log(myUserName); 
// }).catch(function (myError){
//     console.log(myError); 
// }).finally(function () {
//     console.log("promise either resolve or rejected");
    
// })
// console.log("============================");

const p5=new Promise(function(resolve , reject){
    setTimeout(function () {
        let err=false
        if(!err){
            console.log("A5 task");
            resolve({name : "Aman", gender: "Male"})
        }else{
            console.log("A5: Something went wrong");
         
        }

    },1000)
})
async function consumeP5() {  // by using this we dont handle catch gracefully
      try {
        const res=await p5 
        console.log(res);
      } catch (error) {
        console.log(error);
        
      }
}
consumeP5()


async function getAllUsers() {
    try {
          const users= await fetch('https://api.github.com/users')
    //console.log(users);
        const myUser=await users.json()
        console.log(myUser);
    } catch (error) {
        console.log("E"+ error);      
    } 
}
getAllUsers()


fetch('https://api.github.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
    
}).catch((e)=>{
    console.log();
    
})




