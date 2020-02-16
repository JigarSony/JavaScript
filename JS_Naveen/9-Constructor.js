//Constructor function: also used to create objects
//Name: Pascal notation : OneTwoThree

function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log('draw',radius); 
    }
}

//call constrictor ? : new Keyword

const a = new Circle(1);
console.log(a);
console.log(a.radius);
a.draw();