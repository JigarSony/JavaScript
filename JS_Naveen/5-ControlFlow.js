//if - else
//switch

//6 to 12 - Good Morning
//12 to 6 - Good AfterNoon
//after 6 - Good Evening

let hour = 10;

if (hour>=6 && hour<12) console.log('Good Morning');
else if(hour>=12 && hour<18) console.log('Good AfterNoon');
else console.log('Good Evening');

//avoid brackets if only 1 statement

//WAP to find out Max Num
let a = 100;
let b = 200;
let c = 300;

if (a > b && a > c) console.log('a is maximum  : '+a)
else if (b > c) console.log('b is maximum : '+b)
else console.log('c is maximum  : '+c)


//Switch case
let role = 'Jack';
switch(role){
    case 'guest':
        console.log('Guest User');
    break;

    case 'Adminuser':
        console.log('Adminuser');
    break;

    case 'user':
        console.log('user');
    break;

    default:
    console.log('Undefined User');
    break;


}