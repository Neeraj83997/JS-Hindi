let myDate=new Date()
// console.log(myDate)  // 2026-06-14T20:21:22.347Z
// console.log(myDate.toString()); //Sun Jun 14 2026 20:21:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Sun Jun 14 2026
// console.log(myDate.toLocaleDateString()) // 6/14/2026
// console.log(typeof myDate) // object

let myCreatedDate=new Date(2025,0,13)
console.log(myCreatedDate.toDateString()) // Mon Jan 13 2025

let myCreatedDateNew=new Date(2025,0,13,6,7)
console.log(myCreatedDateNew.toLocaleString()) // 1/13/2025, 6:07:00 AM

let myCreatedDate=new Date("2025-7-12")
console.log(myCreatedDate.toLocaleString()) // 1/13/2025, 6:07:00 AM
