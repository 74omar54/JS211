'use strict'

// regex

//find
/*  find is kind of like filter accept rather than returning an entire list of people
that fit that criteria it returns the first case of the item that you are trying to get filtered






*/

//findIndex
/*
This is very similair to find accept rather than find and return the word or 
criteria that you are searching for, it will actually return the index of the item 
that you are looking at! 
*/
//reduce
/*
The purpose of the reduce function is to take in an array
and reduce it to a single element.(can be whatever type!!)
This can be useful when trying to add up all the money on several accounts,
or even when trying to find a specific genre in a music library


let numbers = [10, 5, 2, 6, 8, 2, 7, 80];

find the sum
numbers.reduce(function(perValue, element, index){
    let next = preValue + element
    return next;
    (What ever is returned will be the next value point)
}, 0);


find the max
(I imagine this is the exact same way as I found the min just reversed.)
These are super interesting and might be very useful later on REMEMBER!!!!

find the min
let min = numbers.reduce(function(prevValue, element, index){
    if (prevValue < element){
        return preValue;
    } else {
        return element;
    }
}, numbers[0])


*/