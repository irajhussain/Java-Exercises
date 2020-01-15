console.log("Example with Object in function");

//Object within fuction

function createCar(brand){
var car = {
   
   //properties
   
    brand:brand,
    speed:0,
    
    // Methods
    
    accellerate: function(amount){
    this.speed+=amount;
    },
    
    break: function(amount){
    this.speed-=amount;
    },
    
    status: function(amount){
    return this.brand + " running at " + this.speed + " km/hr";
    }
};
    return car;
}

//calling function

var car = createCar("VW");

//calling methods

console.log(car.status());
car.accellerate(50);
console.log(car.status());
car.accellerate(100);
console.log(car.status());
car.break(25);
console.log(car.status());
