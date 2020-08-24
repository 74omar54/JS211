'use strict'

// let stacks = {
//     a: [4, 3, 2, 1],
//     b: [],
//     c: []
//   };

// let newStacks = stacks.pop();

// console.log(newStacks);

let stacks = { 
    a: [4, 3, 2, 1], 
    b: [], 
    c: []
};
// If a user has the startStack as 'a'
//and moves the piece to 'b'
//then the stack should look like this 
let a = stacks.a;
let b = stacks.b;
let c = stacks.c;
console.log(stacks);
console.log('');
console.log('I will pop the a stack and add it to the b stack');
console.log(b.push(a.pop()));
console.log(stacks);
let lastAVariable = a[a.length -1];// you have to find a way to make this update along with the stacks! 
console.log(lastAVariable);
