
/*
binary search assumes that the list of elements you are looking at are ordered
haystack = an ordered array of elements
needle = an element we are looking for in the ordered array passed through 

*/

let binarySearch = (list,element) => {
    let min = 0;
    let max = list.length -1;
    let mid;

    while(min <= max){
        mid = (min + max)/2;
        mid = Math.floor(mid);
        let middleElement = list[mid];
        if (middleElement == element){
            return mid;
        } else if (element > middleElement){
            min = mid +1;

        } else if (element < middleElement){
            max = mid -1;
        } 
        
    };
    //if we get to this point that means we split the halves as far as we can go, and still did not find the element 
    return -1;


    // we split the array in half and looked at the middle element
    //then we compared our needle to this middle element
    // depending if the needle was greater or less than the middle element, 
    // we discarded the half that did not contain the element
    
};



let foundAt = binarySearch(
    ['apple', 'banana', 'carrot', 'eggs', 'grapes', 'jalepenos', 'kiwi', 'radishes', 'squash', 'watermelon', 'zuchini'],// haystack or list
    'carrot'//needle or the element that we are looking for! 

);

console.log(foundAt);