const circle ={
    radius:1,
    color: 'red',
    log(){

    }
}

console.log(circle);

//adding more properties in circle object

circle.price = 100;
circle.draw = function(){

}

console.log(circle);

//delete properties from circle object
delete circle.price;

console.log(circle);

