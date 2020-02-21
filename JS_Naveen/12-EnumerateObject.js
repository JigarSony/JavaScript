//Enumerating properties of an object
//get all the properties of an object


const circle = {
    radius: 1,
    draw (){
        console.log('draw');
    }
};

//1. for in loop 

for(let key in circle){
    console.log(key,circle[key]);
    //console.log(circle[key]);
}

//2. for of loop 

for(let key of Object.keys(circle)){
    console.log(key);
    //console.log(key,circle[key]);
}

for(let entries of Object.entries(circle)){
    console.log(entries);
}

//3. in operator
//check a property in an object

if('radius' in circle)
    console.log('Yes')

if('draw' in circle)
    console.log('Yes..')