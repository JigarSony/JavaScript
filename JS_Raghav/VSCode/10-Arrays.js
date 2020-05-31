let numbers = [1,2,3,4,5];

console.log(numbers);


let fruits = ['Apple','Banana','Grapes'];

console.log(fruits);

let cars = new Array('ford','honda','toyota');

console.log(cars);

console.log(cars[1]);

cars[1] = 'Audi';

console.log(cars[1]);

console.log(cars);

cars.push('BMW');

console.log(cars);

console.log(cars.length);

for(let x in cars){
    console.log(cars[x]);
}

for(x of cars){
    console.log(x)
}