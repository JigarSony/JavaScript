//for /while /do..while /for...in /for...of
//infinite loop

// loop avoid repetative code

// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');

//for loop

// for(let i = 0; i<10;i++){
//     //console.log(i);
//     if(i%2 !==0){
//         console.log(i + ': is a odd number')
//     }

//     if(i%2 ===0){
//         console.log(i + ': is a even number')
//     }
// }

// for(let j= 0;j<5;j++){
//     console.log('*');
// }


//While loop
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
//     //break;
// }

//infinite loop : 
//loop is not broken and coming out of the loop
//^c for terminate the loop

//do while -- it'll execute atleast once 
// let p=1;
// do{
//     console.log(p);
//     p++;
// }while(p<=10);

//for in 
//for objects

// const persons = {
//     name1: 'Jack',
//     age: 25
// };

// for(let key in persons){
//     console.log(key,persons[key]);
// }


const colors = ['red', 'green','blue'];

// for(let index in colors){
//     console.log(index, colors[index]);
// }

//for of loop
//used to get value from array

for(let i of colors){
    console.log(i)
}
//specific element
console.log(colors[1]);


//break and continue

let k = 0;

while(k<=10){
    
    if(k===5)
        break;
    console.log(k);
    k++;
}