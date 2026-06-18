# Project related to DOM

## project links
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solution

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

## project 2 solution
```javascript
const myForm = document.querySelector('form');
//const myHeight=parseInt(document.querySelector('#hight').value) // this usecase will give you empty, because actually form takes value during submit

//Whenever form submits,it submits either post type or get type.whenever it submits its value goes to the server through url by default. For preventing this we provide preventDefault() method.
myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const myHeight = parseInt(document.querySelector('#height').value);
  const myWeight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (myHeight < 0 || isNaN(myHeight) || myHeight === '') {
    result.innerHTML = `Please give valid height ${myHeight}`;
  }else if (myWeight < 0 || isNaN(myWeight) || myWeight === '') {
    result.innerHTML = `Please give valid weight ${myWeight}`;
  }else{
    const myBmi=(myWeight / ((myHeight*myHeight) / 10000)).toFixed(2)
    result.innerHTML=`<span>${myBmi}</span>`
  }

});
```

## project 3 solution
```javascript
const myClock=document.getElementById('clock')
// const myCloc=document.querySelector('#clock')
// console.log(myClock , myCloc) //both return same element

setInterval(function (){
  const date=new Date()
  //console.log(date.toLocaleTimeString())
  //myClock.innerHTML=date.toLocaleTimeString()

},1000)

```
