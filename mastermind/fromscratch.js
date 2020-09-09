'use strict'

// let callAnother = (callback) => {
//     console.log('About to call the callback');
//     callback.call();
//     console.log('Finished calling the call back');
// }

// callAnother(function(){
//     console.log("I am from the callback");
// });

// REAL LIFE EXAMPLE
 
// let computesInterestAndFollowThrough = (amt, pct, callback) => {
//     let interest = amt * pct;
//     callback(interest);

// }

// computesInterestAndFollowThrough(1000, 1, function(answer){
//     console.log('the interest is : ', answer);
// });

// let scratchForEach = (array, callback) => {
//     for (i = 0; i < array.length; i++){
//         let element = array[i];
//         callback(element, i);
//     }
// }

// let numbers = [-1, 41, 72, 93, 33, 612313];

// scratchForEach(numbers, function(element){
//     console.log(element);
// });

let scratchMap = (array, callback) => {
    let result = [];
    for (i = 0; i <array.length; i++){
        let element = array[i];
        
    }

}

function scratchFind(array, callback) {
    for(let i  = 0; i < array.length; i++){
      let element = array[i]
      let inOrOut = callback(element, i)
      if(inOrOut == true){
        return element
      }
    }
    return undefined
  }
  