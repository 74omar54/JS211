'use strict';


//This is #1 on the homework assignment
let dateAndTime = () => {
   console.log("The current date is ",new Date());
}
dateAndTime();

//This is going to be #2 on the homework assingment (convert a # to a string)
let numToString = (num) =>{
   let x = num.toString();
   console.log("The number entered is now a " + typeof(x));
   return x;
}
console.log(numToString(100));


//This is going to be # 3 on the homework assignment (Convert a string to a #)
let stringToNum = (string) => {
   let z = parseInt(string);                            
   console.log("The string you have entered is now a " + typeof(z));
   return z;
}
console.log(stringToNum('42px'));


//This is going to be # 4 on the homework assignment (Write a JavaScript program that takes in different data types and prints out what they are!)
let whichDataType = (word) => {
   let y = typeof(word);
   return y;
}
console.log(whichDataType("hello"));

//This is going to be # 5 on the homework assignment (Write a JS program that adds to numbers together)
let addTwoNums = (a,b) => {
   let t = a + b;
   return t;
}
console.log(addTwoNums(100,50));

//Write a JS program that runs only when 2 things are true.
let handsome = true;
let rich = false;

if(handsome && rich){
   console.log("They look good with money");
}
//Write a JavaScript program that runs when 1 of 2 things are true.
if(handsome || rich){
   console.log("They are either good looking or they are rich");
}
//Write a JavaScript program that runs when both things are not true.
if(!handsome && !rich){
   console.log("They have no money and they arent good looking!");
}
// Go back and make this a function!!!! 