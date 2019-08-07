class ClassName{

}

class Employee{

    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    // setDetails(name,id){
    //     this.name = name;
    //     this.id = id;
    // }
}

// let emp1 = new Employee();
// emp1.setDetails('JIGAR',10);
// console.log(emp1.name);
// console.log(emp1.id);


let emp1 = new Employee('JIGAR',10);
//emp1.setDetails('JIGAR',10);
console.log(emp1.name);
console.log(emp1.id);


let emp2 = new Employee('JIGAR',1010);
//emp1.setDetails('JIGAR',10);
console.log(emp2.name);
console.log(emp2.id);