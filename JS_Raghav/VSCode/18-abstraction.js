function Employee(name,age,basesalary){
    this.name = name;
    this.age = age;
    this.basesalary = basesalary;

    // this.monthlyBonus = 1000;

    // this.calculateFinalSalary = function(){
    //     let finalSalary = this.basesalary+this.monthlyBonus;
    //     console.log('finalsalary is : '+finalSalary);
    // }

    let monthlyBonus = 1000;

    let calculateFinalSalary = function(){
        let finalSalary = basesalary+monthlyBonus;
        console.log('finalsalary is : '+finalSalary);
    }
    

    this.getEmpDetails = function(){
        console.log('Name: ' +this.name+ ' | Age: '+this.age);
        console.log(calculateFinalSalary());
    }
}

let emp1 = new Employee('Jigar',25,7000);
emp1.getEmpDetails();
//emp1.calculateFinalSalary();

