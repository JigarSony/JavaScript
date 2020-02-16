//data Types:

let name = 'Jigar';
let age = 26;
let color = "Blue";

console.log(name + ' ' + age);
console.log(2+3);

let range = 4;
range =5;
console.log(range);
// it's a variables

const range1=4;
//range1=5; //it's give Assignment to constant variable error
console.log(range1);
// it's a constant

//2 types of data
//1. Primitive DT
//String, Number, Boolean, Undefined, Null

let s1 = 'Name';
let num1 = 10;
let b1 = true;
let isActive = false;
let price;
let model = null;
let wheels = undefined;

//for knowing data type of variable 
//go to console and write
// typeof variable name

//Dynamic Typing

let sta = 'Hello';
sta = 30;

//it is allow in JS to change DT

//object

let user = {
    username: "tom",
    age : 25
}
console.log(user);

//1. dot notation
console.log(user.username);
console.log(user.age);

//update the property

user.age = 35;
console.log(user.age);


console.log(user.username + ' ' + user.age);

// update using bracket
user['username'] = 'Mary';
console.log(user.username);

//array
//list of objects

let language = ['java','c#','php'];
console.log(language);
console.log(language.length);

language[3] = 'Ruby';
console.log(language);

console.log(language[0]);

//functions

function getname(){ //0 param
    console.log("Hello I'm a function");
}

//call the function
getname();


function greet (name){
    console.log('Hello ' + name);
}

greet('Jack')


function add (a1,a2){
    console.log(a1+ a2);
}

add(2,3);

function addr (a1,a2){
    return a1+ a2;
}
let add1 = addr(1,1)
console.log(add1);

console.log(addr(2,3));

function sqrRoot(num){
    let root = num * num;
    return root;
}

console.log(sqrRoot(5));










