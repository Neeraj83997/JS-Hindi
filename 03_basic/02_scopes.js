// var a=10
// let b=20
// const c=30

// console.log(a,b,c); // 10 20 30

var a=10
let b=20 // this let's scope is global
const c=30
if(true){
   var a=11
  let  b=21 //this let's scope is within the if known as block scope
    //c=31 // we can not reassign in constant value
    //console.log(a,b); //11,21
}
//console.log(a,b,c); // 11 20 30

// for (let i = 0; i < array.length; i++) { // here let is used because its scope is within thie for bolck
//     const element = array[i];
// }

//** inner scope  */
// function one(){
//     const name="Ram"
//     function two(){
//         const age=25
//         console.log(name)
//     }
//     //console.log(age);
    
//     two()
// }
// one()

// if(true){
//     const userr="Sita"
//     if(userr === "Sita"){
//         const web="youtube"
//         console.log(userr);
//     }
//     console.log(userr);
//     //console.log(web);
// }
// //console.log(userr);

//================================interesting================
console.log(addOne(2)); //3
function addOne(numb){
    return numb+1
}

//console.log(addTwo(2))  // Cannot access 'addTwo' before initialization
const addTwo=function(numbb){
    return numbb+2
}

