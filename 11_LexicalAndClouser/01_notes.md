## Lexical scoping
```javascript
Lexical scoping means a function has access to variables in its own scope and the scopes outside it, based on where the function is defined in the code.

Inner function → can access Outer function variables.
Outer function → cannot access Inner function variables.

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```


## CLOUSERS
```javascript
   A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.



```
