//factory function - it produces objects

function createCircle(radius){
    const circle = {
        radius : radius,
        draw (){
            console.log('draw');
        }
    }

    return circle;
}

const c1 = createCircle(1);
console.log(c1);
c1.draw();

//camel case : oneTwoThree
