// 'use strict'

// let friends = ['jaime', 'jackie', 'janet', 'jesse0, jenny'];

// //must pass in another function into the forEach function
// friends.forEach();

// let printFriend = (element, index) => {
//     console.log(`${element} st position ${index}`);
// }
// //this is the way a plain old forloop 
// for (let i = 0; i<friends.length; i++){
//     let friend = friends[i];
//     printFriend(friends, i);
// }

// //I can do it with a higher order function such as :
// // pass in a varibale that holds in the function 
// //The function that is being passed in a higher order funcction is CALLBACK function. 
// friends.forEach(printFriend);

// friends.forEach(function(element, index){
//     console.log(`from the second call ${element} index: ${index}`);
// });

let people = [
    {
        name: 'Elon Musk',
        address: 'Planet MARS',
        hobby: 'building Rockets',
        amtDue: 99
    },
    {
        name: 'Kanye West',
        address: 'Rancho st. Wyoming',
        hobby: 'making beats',
        amtDue: 150
    },
    {
        name: 'Clint Eastwood',
        address: 'Wild Wild West',
        hobby: 'Shooting',
        amtDue: 1000,
    },
    {
        name: 'Omar Gonzalez',
        address: '5023 27th st ',
        hobby: 'hooping',
        amtDue: 60
    }
];

//Find the sum of amtDue
let total = people.reduce(function(perValue, element, index){
    let t = perValue + element.amtDue;
    return t;
}, 0)

console.log(total);

// people
//     .filter(amtDue => amtDue >= 75)
//     .map(element => `Hi ${element.name} please sumbit your payment of ${element.amtDue} as soon as possible`)
//     .forEach(console.log(element))
//CREATE A LETTER FOR EVERY PERSON THAT POWES MORE THAN 75
//the letter should say hi {} please submit your payment of {} as soob as possible. thak you;
//STEP1: filter to get thos who owe more than 75$
//STEP2: MAP each person in the filter set to the sentence. 
//STEP3: for each sentence print it out
// let oweBigMoney = people.filter(function(element, index){
//     // return element.amtDue >= 75;
//     if ( element.amtDue > 75){
//         return true;
//     };
//     return false;
// });

//  let moneyNotice = oweBigMoney.map(function(element, index){
//      let sentence = `Hi, ${element.name}, pleas submit your payment of ${element.amtDue} as soon as possible`;
//      return sentence;
//  })



// moneyNotice.forEach(function(element, index){
//     console.log(element);
// })




//  people.forEach(function(element, index){
//      console.log(element.hobby);
//  })

// //The purpose of forEach is to loop through the collection. 
// // the purpose of .map is to transform every element into something else 
// //This does not change the original array!! 
// // hello {name} I live close to {address}, and my hobby is {hobby} too
// //would you like to meet up

// let convert = (element, index) => {
//     return `Hello ${element.name}, I live close to ${element.address}, and my hobby is ${element.hobby}.
//     Would you like to meet up?`;
// }
// let sentences = people.map(convert);
// console.log(sentences);

// //FILTER -> purpose is to filter 'in' elements that meet the criteria

// let numbers = [123, 1235, 3423423, 31334245, 45326, 6, 5, 34, 2, 3, 235, 36,];
// //filter out the evens, (filter in the odds)
// let odds = numbers.filter(function(element, index){
//     //for each number (element), return true if odd, return false if even. 
//     if (element %2 == 0){
//         return false;
//     } else  {
//         return true;
//     }
// });
// console.log(odds);

