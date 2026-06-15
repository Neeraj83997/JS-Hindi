const marvel=["ironman", "thor" ,"spiderman"]
const dc=["batman","flash","superman"]

// const hero=marvel.push(dc)
// console.log(hero) //4
// console.log(marvel) // [ 'ironman', 'thor', 'spiderman', [ 'batman', 'flash', 'superman' ] ]
// console.log(marvel[3][1]); // flash


//console.log(marvel.concat(dc)) // if i comment marvel.push(dc) -> [ 'ironman', 'thor', 'spiderman', 'batman', 'flash', 'superman' ]

//now i want to spread two arrays
const spArr=[...marvel, ...dc] // [ 'ironman', 'thor', 'spiderman', 'batman', 'flash', 'superman' ] //... is known as spread operator
//console.log(spArr);
//console.log(...marvel, ...dc) // ironman thor spiderman batman flash superman

const myArr=[3,2,4,[5,8],1,[9,8,6]]
const real_arr=myArr.flat(Infinity); // infinity is like how much inner arry u want to flat
//console.log(real_arr);

// console.log(Array.isArray("Neeraj")); //false
// console.log(Array.from("Neeraj")); // [ 'N', 'e', 'e', 'r', 'a', 'j' ]
// console.log(Array.from({name : "Neeraj"})); // [] // it can not convert this object directly to array of string, we have to mention either make string[] og key or value

const a1=100
const a2= 200
const a3=300
console.log(Array.of(a1,a2,a3)); //[ 100, 200, 300 ]









