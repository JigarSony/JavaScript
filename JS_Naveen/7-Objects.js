//vars and function should be defined in object
//key: value pair format

let circle = {
    radius : 1,
    isVisible: true,

    location : {
        x: 1,
        y:1
    }, 

     area: function(){
        console.log('draw');
    }
}

console.log(circle.radius);
console.log(circle);