// const arr=[3,2,4,1,5]
// for(const c of arr){
//     console.log(c);
// }
// 3
// 2
// 4
// 1
// 5


// const str="Deep"
// for(const c of str){
//     console.log(c);
// }
// D
// e
// e
// p


const map=new Map()
map.set("IN","India")
map.set("USA","United State Of America")
map.set("FR","France")
//console.log(map);
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United State Of America',
//   'FR' => 'France'
// }

// for (const c of map) {
//     console.log(c);
// }
// [ 'IN', 'India' ]
// [ 'USA', 'United State Of America' ]
// [ 'FR', 'France' ]

// for (const [a,b] of map) {
//     console.log(a+" : "+b); 
// }
// IN : India
// USA : United State Of America
// FR : France

//====forof loop is not working on objects
const myObj={
    game1 : "Pubg",
    game2 : "Taken",
    game3 : "FreeFire"
}
for (const [a,b] of myObj) {
    console.log(a+":"+b); //myObj is not iterable by using forof
    
}