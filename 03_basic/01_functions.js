// function myFun(){
//     console.log("N");
//     console.log("E");
//     console.log("E");
//     console.log("R");
//     console.log("A");
//     console.log("J");
// }
// myFun() // N/E/E/R/A/J

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumber(3,2) // 5
// const addition=addTwoNumber(5,5)
// console.log(addition); //undefine

function addTwoNumber(num1,num2){
    let result=num1+num2
    return  result 
}
const addition=addTwoNumber(5,5)
//console.log(addition); // 10

// function loginUserMessage(userName){
//     return `${userName} , just logged in`
// }
// console.log(loginUserMessage("Neeraj")) // Neeraj , just logged in
// console.log(loginUserMessage()) //undefined , just logged in

function loginUserMessage2(userName){
//function loginUserMessage2(userName = "Sam"){ // this Sam is default value if nothing is passed during calling the function 
//if(userName === undefined){ // or
    if(!userName){ // js converts undefined to a boolean as false, !false -> true // JS considers these values(false,0,-0,0n,"",null,undefined,NaN) as false
        console.log("Please enter User Name");
        return
    }
    return `${userName} , just logged in`
}
//console.log(loginUserMessage2()) // Please enter User Name / undefined

// function calculateCartPrice(...prices){  //  ... -> rest operator
//     return prices
// }
// console.log(calculateCartPrice(200,30,40,50,60));
function calculateCartPrice(val1,val2,...prices){  //  ... -> rest operator
    return prices
}
//console.log(calculateCartPrice(200,30,40,50,60)) // [ 40, 50, 60 ]

const myUser={
    myUserName : "Neeraj",
    myUserPrice : 200
}
function fun(anyObj){
    // console.log(`User Name is ${anyObj.myUserName} , and User price is ${anyObj.myUserPrice}`);  
}
//fun(myUser) // User Name is Neeraj , and User price is 200
//fun({myUserName : "Neeraj",myUserPrice : 200}) // User Name is Neeraj , and User price is 200

const arr=[2,4,3,6]
function myArr(getArray){
    console.log(getArray[1]);
}
myArr(arr) // 4
myArr([2,4,3,6]) // 4



