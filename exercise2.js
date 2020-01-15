class Telivision{   
    constructor(brand){
        this.brand = brand;
        this.channel = 1;
        this. volume = 50;
    }  
    incVolume(amount){
        this.volume += amount;
        
        if(this.volume > 100){
            this.volume = 100;    
        }
        return this.volume;
    }
    decVolume(amount){
        this.volume -= amount;
        
        if(this.volume < 1){
            this.volume = 1;    
        }
        return this.volume;
    }
    setChannel(channel){
        if (channel <= 50){
            this.channel = channel;
        }
        
        return this.channel;
    }
    resetTV(){
        this.channel = 1;
        this.volume = 50;
    }
    statusTV(){
        return this.brand + " at channel " + this.channel + ", volume " + this.volume;
    }
}

var tv = new Telivision("Sony");
tv.incVolume(50);
tv.decVolume(10);
tv.setChannel(5);
tv.setChannel(50);
console.log(tv.statusTV());
tv.resetTV();
console.log(tv.statusTV());