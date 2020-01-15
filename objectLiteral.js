console.log("Example with Literal Object");

//Object

var car = {
   
   //properties
   
    brand:"Ford",
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

//calling methods

console.log(car.status());
car.accellerate(50);
console.log(car.status());
car.accellerate(100);
console.log(car.status());
car.break(25);
console.log(car.status());