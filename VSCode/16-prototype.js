let EmpDetails = function (name,age){
    this.name = name;
    this.age = age;

    // this.getName = function(){
    //     return this.name;
    // };

    // this.getAge = function(){
    //     return this.age;
    // };
};

EmpDetails.prototype.getName = function(){
    return this.name;
};

EmpDetails.prototype.getAge = function(){
    return this.age;
};

let emp1 = new EmpDetails('Jigar',25);
let emp2 = new EmpDetails('John',30);

console.log(emp1.getName());
console.log(emp2.getAge());