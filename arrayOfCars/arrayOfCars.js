'use strict'

let cars = ['Ford', 'Honda', 'BMW', 'Chevrolet']
console.log(cars.length);

let moreCars = ['Audi', 'Ferrari','Toyota', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

let stringOfCars = totalCars.join();
console.log(stringOfCars);

stringOfCars.split(totalCars);
console.log(totalCars);

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

let carsInOrder = carsInReverse.sort();
console.log(carsInOrder);

let removedCars = carsInReverse.slice(4,7);
console.log(removedCars);

carsInReverse.splice(1, 2, "Ford", "Honda")
console.log(carsInReverse);

carsInReverse.push("BMW", "Chevrolet");
console.log(carsInReverse);

console.log(carsInReverse.shift());

console.log(carsInReverse.unshift("TESLA"));
console.log(carsInReverse);

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

let addTwoMore = (array) =>{
    
for (let i = 0; i < array.length; i++){
    console.log(array[i] + 2);
    }

}
console.log(addTwoMore([2, 45, 100, 46, 412, 1]));


