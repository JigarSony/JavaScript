//you can directly checo on the console
//JS predefine Math library 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

 let x =  getRandomArbitrary(1,5)
 console.log(x);
 console.log(Math.floor(x));