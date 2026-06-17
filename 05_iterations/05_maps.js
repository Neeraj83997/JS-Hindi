// const myMap=[1,2,3,4,5,6,7,8,9,10]
// const add10=myMap.map((e)=> e+10)
// console.log(add10);
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

const myMap=[1,2,3,4,5,6,7,8,9,10]
const add10=myMap.map((e)=> e+10).map((num)=> num *10).filter((i)=>i>=140)
console.log(add10);
// [
//   140, 150, 160,
//   170, 180, 190,
//   200
// ]

