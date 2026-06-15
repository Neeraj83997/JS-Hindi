const arr1=[3,1,5,8,2]
// console.log(arr1)
// console.log(arr1[2])

const arr2=new Array(5,3,8,1)
// console.log(arr2)
// console.log(arr2[1])

//arr1.push(11) // to add the element
// arr1.push(14)
// arr1.pop() //remove the last element
// console.log(arr1)

// arr2.unshift(22)  // add element in start
// arr2.unshift(11) 
// console.log(arr2) // [ 11, 22, 5, 3, 8, 1 ]
// arr2.shift() // remove the first or starting element
// console.log(arr2)

// console.log(arr2.includes(8)) //true 
// console.log(arr2.indexOf(8)) //2

// const arr=arr2.join() // convert into string
// console.log(typeof arr) // 5,3,8,1 // string

console.log(arr1) // [ 3, 1, 5, 8, 2 ] 
const ar1=arr1.slice(1,3) // it take index like 1st to 3rd index element, and cut the slice of that and ignore the last index element from slice i.e 3rd index. it does not do any change in original array
console.log(ar1) // [1,5]
console.log(arr1) // [ 3, 1, 5, 8, 2 ] 

const ar2=arr1.splice(1,3) //it take index like 1st to 3rd index element, and cut the slice of that and include the last index element from slice i.e 3rd index. it does change in original array like remove the slice of element from original array
console.log(ar2) // [1,5,8]
console.log(arr1) // [3,2]





