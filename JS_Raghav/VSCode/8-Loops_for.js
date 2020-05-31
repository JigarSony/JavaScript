let i;

for (i = 1; i < 5; i++) {
    console.log("Value of i :"+i);
}

let fruit = ["Apple","Banana","Grapes"];

let x;

for(x in fruit){
    console.log(fruit[x]);
}


for(x of fruit){
    console.log(x);
}