
// types:
// Boat 
// train 
// Airplane
// Bu
// attributes of the actual vehicles
// -capacity 
// -names/ID
// -startDate
// People 
// -pilot 
// -conductor 
// -Captain
// attributes of people 
// -name
// -ID
// -job
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mapping = {
    'Plane': 'Pilot',
    'Boat': 'Captain', 
    'Bus': 'Bus driver', 
    'Train': 'Conductor'

}

// VEHICLES AND CREW
class Vehicle {
    type; // this is the type of vehicle (trains planes and cars etc)
    startDate; // this is the date that the vehicles went into service! 
    id;// this is the id of the vehicle in our fleet 
    capacity;// this is the passenger guest capacity
    crew; //holds a collection of employees on the vehicle

    constructor(id, type, startDate, capacity){
        this.id = id;
        this.type = type;
        this.capacity = capacity;
        this.startDate = startDate;
        this.crew = [];
    }

    //if there is at least 1 crewmember on board, that can drive that type of vehicle
    //return 'GOOD TO GO"
    // else return not ready yet
    status(){

        let requiredJob = mapping[this.type];
        //console.log('the required job is ', requiredJob);
        //looked to see who is onboard
        //for everyone that is on board
        // we checked thier job title to match the type of vehicle 
        //if you found one return ready to go
        //otherwise check the next person

        //if we run out of people to check
        //return not ready
        let found = this.crew.find(function(member){
            if (member.job == requiredJob){
                return true;
            } else {
                return false;
            }
        });

        if (found){
            return 'Good to go! ' +found.name+ 'is on board';
        } else {
            return 'Not ready yet!';
        }
    }
}
class Employee {
    job;
    name;
    id;
    vehicle; //If is not null, then that means that the employee is currently assigned to that vehicle

    constructor(id, name, job){
        this.id = id;
        this.name = name;
        this.job = job;
        this.vehicle = null;
    }
    assignTo(theVehicle){
        // we never told it to remove the crew member from the previous vehicle once they were reassigned
        if (this.vehicle == null){
            //not assigned to anything, feel free to assign 
        } else{
            // this approach removed the crew member from the existing list,
            // does not create a new array
            let lookingFor = this;
            let index = this.vehicle.crew.findIndex(function(member){
                if(lookingFor == member){
                    return true;
                }
                return false;
            });

            if (index >=0){
            this.vehicle.crew.splice(index, 1)
            }
        }
        this.vehicle = theVehicle;
        theVehicle.crew.push(this);

    }
}
if(typeof describe == 'function'){
    //running the npm test
    const assert = require('assert');

    describe("set #1", function(){
        it("should correctly create a new vehicle", function(){
            let titanic = new Vehicle("doomed", "Boat", "1912",2220);
            assert.equal(titanic.id, 'doomed');
            assert.equal(titanic.capacity, 2220);
            assert.equal(titanic.type, 'Boat');
        });
        it ('should create an employee correctly', function(){
            let frank = new Employee(1, 'Frank Underwood', 'Bus Driver');
            assert.equal(frank.name, "Frank Underwood");
            assert.equal(frank.id, 1);
            assert.equal(frank.job, "Bus Driver"); 
        });
       
    });
    describe('set #2', function(){
        it('should correctly assign an employee to the vehicle', function(){
            let titanic = new Vehicle('doomed', 'Boat', '1812', 2220);
            let frank = new Employee(1, 'Frank Underwood', 'Bus Driver');
            assert.equal(titanic.crew.length,0);
            assert.equal(frank.vehicle, null);
            frank.assignTo(titanic);
            assert.equal(titanic.crew.length, 1);
            assert.equal(frank.vehicle, titanic);
            
        });
    });
    describe('set #3', function(){
        it('should correctly assign employee to vehicle if they get reassigned', function(){
            let titanic = new Vehicle('doomed', 'Boat', '1812', 2220);
            let jet1 = new Vehicle('sonic','Plane', '2020', 5);
            let frank = new Employee(1, 'Frank Underwood', 'Bus Driver');
            let megan = new Employee(2, 'Megan Smith', 'Pilot');

            assert.equal(titanic.crew.length, 0);
            assert.equal(jet1.crew.length, 0);
            assert.equal(frank.vehicle, null);
            assert.equal(megan.vehicle, null);

            assert.equal(titanic.status(), 'Not ready yet!');
            assert.equal(jet1.status(), 'Not ready yet!');

            frank.assignTo(titanic);
            megan.assignTo(jet1);

            assert.equal(titanic.status(),'Not ready yet!');
            assert.equal(jet1.status(),'Good to Go! Megan Smith is on board!');
            
        });
    });
};

// let titanic = new Vehicle("doomed", "Boat", "1912",2220);
// let jet1 = new Vehicle("sonic", 'Plane', '2020', 5);
// let thomas = new Vehicle('1', 'Train', '2010', 2 );

// let frank = new Employee(1, 'Frank Underwood', 'Bus Driver');
// let megan = new Employee(2, 'Meagan Smith', 'Pilot');
// let Mark = new Employee(2, 'Mark Doe', 'Assistant');
// let Mary = new Employee(2, 'Mary Dole', 'Assistant');
// let Hook = new Employee(20, 'Captain Hook', 'Captain');

// console.log('before assignment');
// console.log(jet1.status());

// Mary.assignTo(titanic);
// Mark.assignTo(jet1);
// megan.assignTo(jet1);
// frank.assignTo(titanic);
// Hook.assignTo(titanic);

// console.log('after assignment ');
// console.log(jet1.status());
// console.log(titanic.status());

