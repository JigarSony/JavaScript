let fruits = ['Apple','Banana','Grapes'];

console.log(fruits);

fruits.pop();
//pop is use to remove last element from the array
console.log(fruits);

fruits.shift();
//shift is use to remove first element from the array
console.log(fruits);

fruits.push('cherry');
//to add element in last
console.log(fruits);

fruits.unshift('Lemon');
//to add element in first
console.log(fruits);

delete fruits[1];
//delete element at specific index
console.log(fruits);

fruits[1] = 'Orange';
//set value at specific index
console.log(fruits);

fruits.splice(1,2);
//remove range of element both are inclusive
console.log(fruits);

fruits.splice(2,0,'Orange','Lemon');
console.log(fruits);

let citrusFruits = fruits.slice(0,2);
console.log(citrusFruits);
console.log(fruits);

let evenNumber = [2,4,6];
let oddNumber = [1,3,5];
let primeNumber = [2,3,5];

let number = evenNumber.concat(oddNumber);
console.log(number);

let allnumber = evenNumber.concat(oddNumber,primeNumber);
console.log(allnumber);