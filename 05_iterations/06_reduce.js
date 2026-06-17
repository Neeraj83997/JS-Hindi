const numArr=[3,5,2,6,4]
// const total=numArr.reduce(function (acc,valu) {
//     return acc + valu
// },0)   //20

const total= numArr.reduce((acc,valu)=> acc+valu,0) // 20
//console.log(total);


const shoppingCart=[
    {
        itemName : "java course",
        price : 1999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "js course",
        price : 1499
    },
    {
        itemName : "mobile course",
        price : 2999
    },
]
const cartPrice=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(cartPrice); // 7496

