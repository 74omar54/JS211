'use strict'

// I want this function to return the length
// of the string passed in

// .length does not need any quotation marks 
// let getSize = (string) => {
//     return string.length;
// }
// console.log("string: bob", getSize("bob"));
// console.log("string: the lazy dog", getSize("the lazy dog"));

// let hasA = (str) => {
//     // let lowerCaseVersion = str.toLowerCase();
//     // let hasA = lowerCaseVersion.includes('a');
//     // return hasA;
   
//     return str.toLowerCase().includes('a');
//     // Both of the examples I used are exactly the same! 

// }

// let sentence = "The brown fox jumped over the lazy dog";
// let previews = "The  brown ....";
// //return the first 10 characters of the string
// let preview = (longString) => {
//     return console.log(longString.substr(0, 10) + "...");

// }
// // the brown ...
// preview("the brown fox jumped over the lazy dog");
// //in the beg...
// preview("in the beginning, there was code and nothing else");

//  // function should return the position of the needle in a haystack
//  let find = (haystack, needle) => {
//      haystack.indexOf(needle);
//  }
//  console.log(find("the brown fox", 'b'));
//  console.log(find("the brown fox", 'o'));



// // substring/substr : returns a portion of the original string
// // indexOf : returns the position of the "needle" in your string
// // includes : returns true if the "needle" is in your string
// // toLowerCase : returns a new string that is all lowercase.

// // 1. if a word starts with a vowel, the piglatin translation is "add yay" to the end
// // 2. if the word does not start with a vowel, but has a vowel in the middle split the word into two parts,
// // part 1 = all of the letters before the vowels
// // part 2 = all the letters starting at the vowel
// // then swap those two parts and add 'ay' at the end
// // create -> cr + eate -> eate + cr -> eate + cr + ay -> eatecray

// // 3. if the word does not have a vowel add ay to the end. 
// // this is just a special case of rule #2.

// // you can use 'aeiou'.includes(Letter)
// // create 
// // c
// // r
// // e
// // a
// // t
// // e

let indexOfVowel = (word) => {
    let letters = word.split('');
    for (let i = 0; i < letters.length -1; i++){
        let letter = letters[i];
        let hasVowel = 'aeiou'.includes(letter);
        if (hasVowel[0]){
            return "this word starts with a vowel"
        }
    }
}
console.log(indexOfVowel("egg"));

// 0 1 2 3 4 5
// c r e a t e

// vowel @ pos 2

//part 1 = CR , use substring what position are you going to start with
// par2 = EATE, start at the index of the vowel (use substring());