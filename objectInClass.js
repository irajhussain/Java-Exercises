console.log("Class Example");

//object in class
 
class Car{
    
    constructor(brand){
        this.brand = brand;
        this.speed = 0;
    }
    
    //methoods not functions
    accelerate(amount){
        this.speed += amount;
    }
    
    brake(amount){
        this.speed -= amount;
    }
    
    status(){
        return this.brand + " running at " + this.speed + " km/h";
    }
}

// Now we use create a Car object using the class

var car = new Car("Ford");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());

var car2 = new Car("Ferrari");
console.log(car2.status());
