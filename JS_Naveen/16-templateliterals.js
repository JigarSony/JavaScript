const str = 'Hey I am Jigar';
console.log(str);

const str1 = 'Hey I am\n Jigar';
console.log(str1);

const str2 = 'Hey I am\n'+
                'Jigar';
console.log(str2);

const str3 = 'Hey I am\n'+
                '\'Jigar\'';
console.log(str3);

//literals:
//Object: {}
//Boolean: true, false
//String: '' , ""
//ES6: Template literals -- Back Tick char -- ``

let name = 'Jack MA'

let product = function(){
    return 'Apple';
}
const mailbody = `Hi ${name},

${2+3}

Thanks you for adding me in your 'business'

${product()}
Regards
Jigar
`
console.log(mailbody);
