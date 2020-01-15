console.log("Practice to string method");

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    
    toString(){
        return this.name + " --> " + this.price +" euro"
    }
}

var p = new Product("vaccum cleaner",100);
console.log("The product is: "+p);

p.name = "Sofa";
p.price = 1000;

console.log("The product is: "+p);

let p2 = p;

p2.price = 1500;

console.log("The product is: "+p);

let p3 = new Product("pencil", 3);
p2 = p3;
p.price = p2.price;

console.log("The product is: " + p);
