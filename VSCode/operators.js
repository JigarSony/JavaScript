/****Arithmetic Variables */

let x = 5;
let y = 2;

let result = x + y;
let result = x - y;
let result = x * y;
let result = x / y;
let result = x % y;
let result = x ** y;  //exponential

console.log('Result is : '+result);


let a = 10;
console.log(a);

let q = 2 * ++a;
console.log(q);
console.log(a);

let b = 10;
let r = 2 * b++;
console.log(r);
console.log(b);

--a;
console.log(a);

a--;
console.log(a);



/****************     Assignment Operators */

let j = 10;

let k = 10 + 20;

j+= 2; //j=j+2;
console.log(j);

j-= 2; //j=j-2;
console.log(j);

j*= 2; //j=j*2;
console.log(j);

j/= 2; //j=j/2;
console.log(j);

/*********  COmparision operator */

let a1 = 10;

let b1 = 20;

let result1 = a1==b1;

console.log(result1);

let a2 = 10;

let b2 = '10';

let result2 = a2==b2;

console.log(result2);

let result3 = a2===b2; //=== compare value && types

console.log(result3);

let result4 = a2!=b2;

console.log(result4);

let result5 = a2!==b2; //=== compare value && types

console.log(result5);


console.log(a2>b2);

console.log(a2<b2);


console.log(a2>=b2);

console.log(a2<=b2);

// Ternary Operators

/*
Like if -then -else condition
takes 3 arguments
condition ? value if true : value if false
*/

let l = 10;  //30
let m = 20;


let res = l > m ? l : m

console.log(res);

/********Logical Operators */


let lo1 = true;

let lo2 = false;

console.log(lo1&&lo2);

console.log(lo1||lo2);

console.log(!lo1);
console.log(!lo2);