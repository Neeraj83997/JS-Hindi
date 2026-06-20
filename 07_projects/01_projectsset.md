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
## project 4 solution
```javascript
const myGuessField = document.querySelector('#guessField');
const mySubmit = document.querySelector('#subt');
const myGueses = document.querySelector('.guesses');
let guessArray = [];
const remainigResult = document.querySelector('.lastResult');
const myLowOrHigh = document.querySelector('.lowOrHi');
const myResultParas = document.querySelector('.resultParas');

let randomNum = parseInt(Math.random() * 100 + 1);

let guessNum = 1;

const para = document.createElement('p');

let playAvialibility = true;
if (playAvialibility) {
  mySubmit.addEventListener('click', function (e) {
    e.preventDefault();
    const userInput = parseInt(myGuessField.value);
    inputGuessValidation(userInput);
  });
}
function inputGuessValidation(userInput) {
  if (isNaN(userInput)) {
    alert('Please enter valid number!');
  } else if (userInput == '') {
    alert('Please enter any number between 1 to 100');
  } else if (userInput > 100) {
    alert('Please enter number less than 100');
  } else if (userInput < 1) {
    alert('Please enter number more than 1');
  } else {
    guessArray.push(userInput);
    if (guessNum > 10) {
      displayGuess(userInput);
      displayMessage(`Game Over, Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(userInput);
      checkGuess(userInput);
    }
  }
}
function displayMessage(message) {
  myLowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function displayGuess(userGuess) {
  myGuessField.value = '';
  myGueses.innerHTML += `${userGuess}, `;
  guessNum++;
  remainigResult.innerHTML = `${11 - guessNum}`;
}
function endGame() {
  myGuessField.value = '';
  myGuessField.setAttribute('disabled', '');
  para.innerHTML = `<h2 id="newGame"> Start Again</h2>`;
  myResultParas.appendChild(para);
  playAvialibility = false;
  newGame();
}
function checkGuess(userInput) {
  if (userInput === randomNum) {
    displayMessage('You guessed it right.');
    endGame();
  } else if (userInput > randomNum) {
    displayMessage('Number is too High');
  } else if (userInput < randomNum) {
    displayMessage('Number is too Low');
  }
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    guessArray = [];
    guessNum = 1;
    myGueses.innerHTML = '';
    remainigResult.innerHTML = `${11 - guessNum}`;
    myGuessField.removeAttribute('disabled');
    myResultParas.removeChild(para);

    playAvialibility = true;
  });
}
```
## project 6 solution
```javascript
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};
const bgColor = function () {
  document.body.style.backgroundColor = randomColor();
};
let settingIntervalId;
const startChanging = function () {
  if (!settingIntervalId) {
    settingIntervalId = setInterval(bgColor, 1000);
  }
};
const stopChanging = function () {
  clearInterval(settingIntervalId);
  settingIntervalId = null;
};

document.querySelector('#start').addEventListener('click', startChanging);

document.querySelector('#stop').addEventListener('click', stopChanging);
```
## project 5 solution
```javascript
console.log('Project 5');

const myInsert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  myInsert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
  
    <td>${e.key == ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});

```
