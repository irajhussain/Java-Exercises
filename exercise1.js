class Car {

	constructor(brand,model) {
		this.brand = brand;
        this.model = model;
		this.speed = 0;
	}

	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount) {
		this.speed -= amount;
           
        if (this.speed < 0){
            this.speed = 0;
        }
	}
    
    stop(){
        this.speed=0;
        return this.brand + "-" + this.model + " STOP";
    }
    
    runningStatus(){
        
        if (this.speed <= 0){
            return false;
        }
        else return true;
    }

	status() {
		return this.brand + "-" + this.model + " running at " + this.speed + " km/h";
	}
}

var car = new Car("Ford", "Mondeo");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());
console.log(car.runningStatus());
car.brake(200);
console.log(car.status());
console.log(car.stop());
console.log(car.runningStatus());



/*
var car2 = new Car("Ferrari", "Tributo");
car2.accelerate(200);
console.log(car2.status());
*/


