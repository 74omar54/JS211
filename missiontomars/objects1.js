/*
finish put the travel method
add some test to travel method
add some check to keep the world sane
no overfueling, or letting the tank go negative, or driving negative distance
*/

//DTE (distance till empty)
//how full your tank is (as a % and as a number of gallons)





class car {
   
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
        if (this.fuelTankSize < numOfGallons){
            console.log(` you have spilled gas onto the floor`);
            return false;
        }
        if (this.fuelTankSize == numOfGallons){
            console.log(`you have filled the car 100%`)
            this.currentFuel += numOfGallons;
        }
        else {
            this.currentFuel += numOfGallons;
        }
    }
    //returns how many miles that we can travel with the current fuel
    distanceTillEmpty(){
         let howFar = this.mpg * this.currentFuel;
         return howFar;
    }

    //this function updates the current fuel based on the distance travel
    //should you be able to travel a negative distance
    //should you be able to trabel passsed an empty tank?
    //should your tank ever go negative?

    travel(distance){
        if (distance > this.distanceTillEmpty()){
            console.log("sorry you have attempted to travel further than the amount of fuel you have");
            return false;
        }
        if (distance < 0){
            console.log("clearly you cannot travel a negative distance silly");
            return false;
        } else{ 
            
        }
    
        
    
        
    };
}
// 10 mpg and 50 gallon capacity
let car1 = new car(10, 50);
console.log(car1.currentFuel);//this shows that the car has no fuel
car1.addFuel(51);
car1.addFuel(50);
console.log(`you have added ${car1.currentFuel} gallons to the car`)
console.log(car1.distanceTillEmpty());
// console.log(`the car has ${car1.currentFuel} gallons, after adding gas`);
// console.log(`the car can travel ${car1.distanceTillEmpty()} before running out of gas`);
// car1.travel(200);//the car has traveled 250 miles 
// console.log(`the car now has ${car1.currentFuel} gallons left after traveling 200 miles`);



