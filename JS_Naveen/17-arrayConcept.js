const num = [];
console.log(num);

const num1 = [3,4];
console.log(num1);

console.log(num1.length);

console.log(num1[0]);

//add an element at end of an array
num1.push(5,6);
console.log(num1);

//add an element at begining of an array
num1.unshift(1,2);
console.log(num1);

//add an element in middle of an array
num1.splice(2,0,'a','b');
console.log(num1);

//how to print all the values from an array
for (const key in num1) {
        console.log(num1[key]);
    }

//find an element in array: (primitive type)  
const s = [1,2,3,4,1,];

console.log('-----');

console.log(s.indexOf(1));//first occurance
console.log(s.indexOf(5));
console.log(s.indexOf('a'));

console.log(s.indexOf(1,1));//2nd occurence

console.log(s.indexOf(1,s.indexOf(1)+1));

console.log(s.indexOf(3)!==-1);//true
console.log(s.includes(3));


//find an element in array: (reference type)  
//array can have object

const cources = [
    {id:1, name:'a'},
    {id:2 ,name:'b'}
];

//console.log(cources.includes({id:1, name:'a'}));//false

const c1 = cources.find(function(cource){
    return cource.name === 'b';
});
console.log(c1);
console.log(c1.id);
console.log(c1.name);

//using lambda fun
const c3 = cources.find(cource => cource.name === 'a')
console.log(c3);

const c2 = cources.findIndex(function(cource){
    return cource.name === 'b';
});
console.log(c2);