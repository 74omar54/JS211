//THIS IS HOW TO EXTEND ON TO CLASSES!!!!! 


class Car {
   
    vin;
    mpg;
    fuelTankSize;
    currentFuel;

    constructor(iMpg, iTankSize){
        //this code will run when the new object is instantiated
        this.vin = Math.random();
        this.mpg = iMpg;
        this.fuelTankSize = iTankSize;
        this.currentFuel = 0;
        
    };
    // this function currently allows you to over fill your tank NO BUENO
    //should you allow a negative value
    addFuel(numOfGallons){
        //this.currentFuel  = this.currentFuel + numOfGallons;
        this.currentFuel += numOfGallons;
    }
    //returns how many miles that we can travel with the current fuel
    distanceTillEmpty(){
        return this.mpg * this.currentFuel;
    }

    //this function updates the current fuel based on the distance travel
    //should you be able to travel a negative distance
    //should you be able to trabel passsed an empty tank?
    //should your tank ever go negative?

    travel(distance){
        //got to build this function out;
    };
}

class Truck extends Car{
    bedSize; //got to build this function out
    loaded;  // if true, then the truck is loaded with dirt (hauling);

    constructor(mpg, tankSize, bedSize){
        super(mpg, tankSize);
        this.bedSize = bedSize;
        this.addFuel(tankSize);

    }
    loadUp(){
        this.loaded = true;
    }
    unload(){
        this.loaded = false;
    }
    distanceTillEmpty(){
        let adjustedMPG;

        if(this.loaded){
            adjustedMPG = this.mpg - this.mpg * .1;
        } else{ 
            adjustedMPG = this.mpg;
        }
        return adjustedMPG * this.currentFuel;
    }
}

let truck1 = new Truck(15, 25, 4);
let car1 = new Car(25, 11);
car1.addFuel(10);


truck1.loadUp();
console.log('truck is loaded?', truck1.loaded)
console.log(car1);
console.log(car1.distanceTillEmpty());
console.log(truck1.distanceTillEmpty());
truck1.unload();
console.log(truck1.distanceTillEmpty());