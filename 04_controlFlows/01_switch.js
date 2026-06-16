const month= 3
switch (month) {
    case 1: console.log("Jan") // for copy and paste -> shift + alt + down arrow
        break;
    case 2: console.log("Fab")
        break;
    case 3: console.log("March")
        break;
    case 4: console.log("April")
        break;

    default:
        console.log("Default case code")
        break;
}

//=========Truthy ================
// const userEmail="Neeraj@abc" // if empty string "" then o/p is Dont have email // if empty array [] is there, then o/p is Dont have email
// if(userEmail){ // it assumes true because String has some value and its not empty
//     console.log("Got email");
// }else{
//     console.log("Dont have email");
    
// }
// false values are -> false, 0 ,-0, 0n(BigInt), "" , null, undefined, NaN
//Some surprised Truthy values are -> "0" , 'false' , " " , [] , {} , function(){} -> empty function

// const empty=[]
// if(empty.length==0){
//     console.log("Array is empty");
// }

// const empObj={} 
// if(Object.keys(empObj).length ==0 ){
//     console.log("Empty Object");
    
// }

//===========Nullish Coalescing Operator (??): null undefined
let value1;
//value1= 5 ?? 10 //5 -> 5 or 10-> 5 value comes thats why 10 is not goes
//value1= null ?? 11 //11 -> if null comes then 2nd value will come
//value1= undefined ?? 22 //22 -> if undefined comes then 2nd value will come
value1= undefined ?? 11 ?? 12 ?? 13 //11-> whatever value comes first, that will goes 
console.log(value1);

//=======terniary operator==========
const price=100
price<60 ? console.log("price is less than 60 ") : console.log("greater than 60");



