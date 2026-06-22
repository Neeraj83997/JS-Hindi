let myName='Neeraj       '
let myAge=23

console.log(myName.length);

//now i want to create method which can give solve space issue like trueLength() 

let sHero=['thor',"flash"]
let hPower={
    thor: 'Hammer',
    flash: 'Fast Runner',
    getFlashPower: function () {
        console.log(`Flash power is ${this.flash}`);
        
    }
}

Object.prototype.myPower=function () {
    console.log("My Power is good");
    
}
hPower.getFlashPower()
hPower.myPower() // My Power is good
sHero.myPower() // My Power is good

Array.prototype.myArrPower=function () {
    console.log("My Arr Power"); 
}
sHero.myArrPower()
//hPower.myArrPower() // gives error


//============================

const user={
    name: "Neeraj",
    age: 43
}
const teacher={
    makeVideo: true
}
const teachingSupport={
    isAvialble:true
}
const taSupport={
    assignment: "JS notes",
    isPermanent: true,
    // outdated approach
    __proto__: teachingSupport // it will take all the properties of teacher like inheritance // outdated approach
}
// outdated approach
teacher.__proto__=user // // it will take all the properties of user like inheritance

//Modern approach
Object.setPrototypeOf(teacher,user) //  teacher cab use all the properties of user
Object.setPrototypeOf(taSupport,teachingSupport)


console.log('======================');

const myVar='He is mad.  '
String.prototype.trueLength=function () {
    console.log(this);
    
     console.log(`True length is ${this.trim().length}`);
     
}
myVar.trueLength()
"Neeraj    ".trueLength()  

