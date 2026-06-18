# Project related to DOM

## project links
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Neeraj")
const myButton=document.querySelectorAll('.button')
const myBody=document.querySelector('body')
//console.log(myButton) // data comes in NodeList

myButton.forEach(function (butn){
//console.log(butn) // give 4 elements
butn.addEventListener('click',function(e){ //e is event object details
   console.log(e)
   console.log(e.target)
   console.log(e.target.id)
    if(e.target.id === 'grey'){
      myBody.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'white'){
      myBody.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'blue'){
      myBody.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'yellow'){
      myBody.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'orange'){
      myBody.style.backgroundColor=e.target.id
    }

}) 
})





```
