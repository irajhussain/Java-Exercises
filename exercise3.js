class Product{
    
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    
    toString(){
        return this.name + " " + this.price + " euro";
    }
}

let p1 = new Product("vacumm",100);
let p2 = new Product("pencil",3);
let p3 = new Product("bike", 150);
let p4 = new Product("Laptop", 300);
let p5 = new Product("phone", 200);
//console.log(p1.toString())
//console.log("the product is " + p1)

class ShoppingCart {
    
    constructor(){
        this.products = [];
        this.sum = 0;
    }
    
    addProduct(product){
        this.products.push(product);
    }
    
    totalPrice(){
        
        //let sum = 0;
        for(var i=0; i<this.products.length; i++){
        this.sum = this.sum + this.products[i].price;
        }
        return this.sum;
    }
    
    discount(){
        var count =1;
        var temp = [];
        var f = false;
        for(var j=0; j<this.products.length-1; j++){
            count=1;
            if(j == 0){
                temp.push(this.products[j].name);
            }
            else {
                for(var r=0; r<temp.length; r++ ){
                    f=false;
                    if(this.products[j].name == temp[r]){
                        f =true;
                        break;
                    }
                }
            temp.push(this.products[j].name);
            }
            if (f == true){
                continue;
            }
            for(var k=j+1; k<this.products.length; k++){
            if(this.products[j].name == this.products[k].name){
                var count = count + 1;
                }
            }
            var t = Math.floor(count/4);
            if(t>0){
                this.sum -= (this.products[j].price)*t;
                console.log(this.products[j].price+"t"+this.sum);
            }

        }
        return this.sum;
        
         
     /*   
        var a = this.products[i].name;
        
        if(this.products.length >= 5){
            var disc = this.sum - (this.sum*.1);
        }
           
        return disc;*/
    }
       
    
    
    
    toString(){
        return "cart with: " + this.products;
    }
}

let cart = new ShoppingCart();
//console.log(cart)
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p4);
cart.addProduct(p5);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p3);
//console.log(cart)
console.log("We have a " + cart);
console.log("Your Bll Value is: " + cart.totalPrice());
console.log("Discounted Val is: " + cart.discount());


