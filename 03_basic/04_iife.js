// Immediately Invoked Function Expression (IIFE)
// IIFE is a JavaScript function that runs automatically as soon as it is defined. And avoid pollution of global scope's variable

// function fn(){
//     console.log(`DB Connected`);
// }
// fn()

(function fn(){
    console.log(`DB Connected`);
})();  // must ;    // ()() -> (fn)() // DB Connected     // In this line we must have to provide semicolon -> ; ,because this function run immediately ,that's why for ending this ; is used
(function fn2(){
    console.log(`DB Connected Two`); //DB Connected Two
})();
(()=> console.log(`DB Connected Three`))(); //DB Connected Three
((name)=>console.log(`${name} DB Connected Four`))("Neeraj");

 