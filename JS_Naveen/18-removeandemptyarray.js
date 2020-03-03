const num = [1,2,3,4];
console.log(num);
console.log('-----');


//End
const last = num.pop();
console.log(last);
console.log(num);
console.log('-----');

//Begining
const first = num.shift();
console.log('-----');
console.log(first);
console.log(num);
console.log('-----');

//Middle

const num1 = [1,2,3,4,5];
const mid = num1.splice(2,1);
console.log('-----');
console.log(mid);
console.log(num1);
console.log('-----');


num1.splice(2)
console.log(num1);

console.log('-----');

// 1. Empty array 
let empty = [1,2,3];
console.log(empty);

// empty = [];
// console.log(empty);

//2.using length
empty.length = 0;
console.log(empty);


let emty1 = [1,2,3,4];
let anotherempty1 = emty1;

console.log('-----');

//making blank to emty1
//emty1= [];

console.log(emty1);
console.log(anotherempty1);

//so that's wht using 2nd approach

//3. splice
//remove element from an array

// emty1.splice(0,emty1.length);
// console.log(emty1);

//4. pop method
while(emty1.length>0)
    emty1.pop();
    
console.log('-----');
console.log(emty1);











