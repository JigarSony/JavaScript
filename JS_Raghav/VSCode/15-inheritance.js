class Car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine Started for '+this.name);
    }

    stopEngine(){
        console.log('Engine Stoped for '+this.name);
    }

}

class Toyota extends Car{

    topSpeed(speed){
        console.log('Top Speed for'+this.name +'is ' + speed);
    }
}

let mycar = new Toyota();

mycar.setName('Camry');
mycar.startEngine();
mycar.stopEngine();
mycar.topSpeed(180);