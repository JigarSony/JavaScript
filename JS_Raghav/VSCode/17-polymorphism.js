class Animal{

    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(this.name+ ' eats food');
    }
}

let animal1 = new Animal('Dog');
animal1.eats();

class Alligator extends Animal{

    eats(){
        super.eats();
        console.log(this.name+ ' eats fishes');
    }
}

let animal2 = new Alligator('Dog');
animal2.eats();

