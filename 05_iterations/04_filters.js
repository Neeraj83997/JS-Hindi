// const coding=["Java","Python","C++"]
// const con=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(con); // undefined, because foreach does not return any value


// const MyNum=[1,2,3,4,5,6,7,8]
// const myVar=MyNum.filter((e)=> e > 4)
// //console.log(myVar); //[ 5, 6, 7, 8 ]

const MyNum=[1,2,3,4,5,6,7,8]
const myVar=MyNum.filter((e)=>{
  return e>4
})
//console.log(myVar); //[ 5, 6, 7, 8 ]
//MyNum.filter((e)=> e>4).forEach((item)=>{console.log(item); }) // 5   6   7   8

const ar=[]
MyNum.forEach((e)=>{
    if(e>4){
        ar.push(e) 
    }
})
//console.log(ar); //[ 5, 6, 7, 8 ]


const books=[
    {
        title : "Book One",
        genre : "Fiction",
        publish : 1981,
        edition : 2004
    },
    {
        title : "Book Two",
        genre : "Non-Fiction",
        publish : 1992,
        edition : 2008
    },
    {
        title : "Book Three",
        genre : "History",
        publish : 1999,
        edition : 2007
    },
    {
        title : "Book Four",
        genre : "Non-Fiction",
        publish : 1989,
        edition : 2010
    },
    {
        title : "Book Five",
        genre : "Science",
        publish : 2009,
        edition : 2014
    },
    {
        title : "Book Six",
        genre : "Fiction",
        publish : 1987,
        edition : 2010
    },
    {
        title : "Book Seven",
        genre : "History",
        publish : 1986,
        edition : 2004
    },
    {
        title : "Book Eight",
        genre : "Science",
        publish : 2011,
        edition : 2016
    },
    {
        title : "Book Nine",
        genre : "Non-Fiction",
        publish : 1981,
        edition : 1989
    }   
]
// ==============find out that books whose genre is history
const newBooks=books.filter((bk)=>bk.genre == "History").map((e)=>e.title)
//console.log(newBooks); // [ 'Book Three', 'Book Seven' ]


//=============find out that books whose published after 2000 
const pBook=books.filter((bk)=> {
     return bk.publish >= 2000
})
//console.log(pBook);
//o/p
// [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]

//=============find out that books whose published after 1995 and genre is history
const pubAndHis=books.filter((bk)=> bk.publish>=1995 && bk.genre=="History") 
console.log(pubAndHis);





