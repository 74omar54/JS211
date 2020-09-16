'use strict';


let fibonaciAt = (position) => {
    if (position == 0){
        return 0;
    } else if (position == 1){
        return 1;
    } else{
        let fibonaciNum = fibonaciAt(position - 1) + fibonaciAt(position - 2);
        return fibonaciNum;
         
    }
}
console.log('The number returned is ', fibonaciAt(0));// should be 0 
console.log('The number returned is ', fibonaciAt(1));// should be 1
console.log('The number returned is ', fibonaciAt(2));//should be 1
console.log('The number returned is ', fibonaciAt(3));//should be 2
console.log('The number returned is ', fibonaciAt(20));