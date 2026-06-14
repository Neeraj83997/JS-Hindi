const myName="Neeraj"
const repoCount=15
// console.log(myName+" "+repoCount+" value") // Neeraj 15 value
// console.log(`My name is ${myName} and i have ${repoCount} Repo`) 

const name = new String("NeerajP")
// console.log(name[3]) // r
// console.log(name.__proto__) // {}

// console.log(name.length)
// const newString=name.substring(0,4)
// console.log(newString)
// const anotherString=name.slice(-4,5)
// console.log(anotherString)
// console.log(name.indexOf('r'))
// console.log(name.charAt(3))

const str1=new String("    Neeraj Patel!    ")
console.log(str1.trim()) //Neeraj Patel!
const url="https://neeraj/neeraj.com%20patel"
console.log(url.replace('%20','-')) //https://neeraj/neeraj.com-patel
console.log(url.includes("neeraj")) //true


