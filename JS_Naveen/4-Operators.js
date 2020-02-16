// Types of Operator

// Arithmatic
// Assignment
// Ternary
// Comparison
// Logical
// bitwise


//arithmatic Operato
// let x = 10;
// let y = 20;

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(y/x);
// console.log(x/y);
// console.log(2**3);  //2^3

// console.log(x%y);


// // ++ and --

// let p=1;

// console.log(p++);
// console.log(p);

// console.log(++p);
// console.log(p);

// console.log(--p);
// console.log(p);

// console.log(p--);
// console.log(p);


//Assignment 

// let x = 10;
// let c = x+10;

// console.log(x+c);

// x*=10;
// console.log(x);


// let j = 5;
// j+=5;
// console.log(j);


//comparison 

//strict and loose comparison
// let x = 10;
// console.log(x<10);
// console.log(x>10);
// console.log(x===10); //strict equality - type and value

// console.log(1===1);

// //loose equality - value

// console.log('1' == 1);
// console.log(1 == 1);
// console.log(true == 1);


//Ternary Operators
// let point = 90;
// //let point = 110;
// let level = point > 100 ? 'Gold' : 'Silver'

// console.log(level);

//Logical

//And (&&)
//T && T -> T only

// let highIncome = true;
// let cibilScore = true;

// let eligibility = highIncome && cibilScore;

// console.log(eligibility);

// //OR (||) F || F -> F only

// let eligibility1 = highIncome || cibilScore;
// console.log(eligibility1);

// //NOt (!)
// let isActive = true;
// console.log(!isActive);

//logical operators with non-boolean
//falsy(false)
//undefined
//null
//0
//false
//''
//NaN


//truthy value : which are not falsy
// console.log(false || 'Jack')
// console.log(false || 1 || 2)
// console.log(true || 1 || 2)

// //real time Ex

// let userColor = 'blue';
// //let userColor = '';
// //let userColor = undefined;
// //let userColor = 0;

// let defaultColor = 'white';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

//bitwise

//1 = 0001
//2 = 0010

// console.log(1|2);
// console.log(1&3);


//operator precedence

console.log(2+3*4);
console.log((2+3)*4);

//swap two num
let a = 10;
let b = 20;

console.log(a);
console.log(b);

let c = a;
    a = b;
    b = c;

console.log(a);
console.log(b);

let str1= 'JigarSoni';
let revStr1 = '';

for(let i = str1.length-1;i>=0;i--){
    console.log(str1[i]);
    revStr1 = revStr1 + str1[i];
}

console.log(revStr1);


