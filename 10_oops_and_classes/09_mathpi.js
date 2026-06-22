const c=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(c);
//o/p
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

console.log(Math.PI); // 3.141592653589793
Math.PI=5 // we can not override it. 
console.log(Math.PI); 

//================================

const chai={
    name: 'ginger chai',
    price: 230,
    isAvialable: true,
    makeChai: function(){
        console.log("not made");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// o/p
// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(chai,'price', {
  writable: false,  // we can not override it
  enumerable: false   // like iterate, we can not iterate
})
console.log(Object.getOwnPropertyDescriptor(chai,'price'));
chai.name='green chai'
console.log(chai.name); // green chai // override it
chai.price=200
console.log(chai.price); // not override it

console.log("//===========================");


for(const [key,value] of Object.entries(chai)){
    
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`); // o/p  name : green chai  isAvialable : true // price is not coming here because of it is not iterable right now
    }
}








