const coding=["Java","Python","C++"]

//coding.forEach(function f(item){  //OR    Java   Python   C++
// coding.forEach(function (item){  //OR    Java   Python   C++
coding.forEach((item)=>{
    //console.log(item);                   // Java   Python   C++
    
})


function print(p){
    //console.log(p);   
}
coding.forEach(print)  // Java   Python   C++


coding.forEach((item,index,arry)=>{
    //console.log(item,index,arry);
})
// o/p
// Java 0 [ 'Java', 'Python', 'C++' ]
// Python 1 [ 'Java', 'Python', 'C++' ]
// C++ 2 [ 'Java', 'Python', 'C++' ]


const prog=[
    {
        progName : "Java",
        progPrice : 999
    },
    {
        progName : "Python",
        progPrice : 1999
    },
    {
        progName : "C++",
        progPrice : 599
    },
]
prog.forEach((item)=>{
    console.log(item.progPrice); //  999  1999  599 
})