//returns the position of the first vowel
//if there are no vowels, returns -1
let indexOfVowel = (word) => {
    let letters = word.split('');
    let i = 0;
    for ( i = 0; i < letters.length; i++){
        let letter = letters[i];
        let firstLetterVowel = 'aeiou'.includes(letters[0]);
        let hasVowel = 'aeiou'.includes(letter);
        let updatedWord = word.split(letter)
        
        if(firstLetterVowel){
            return word + 'yay';
        }
        if(hasVowel){
            return updatedWord;

        }
    }
    //if we get to this point
    //that means that we finished going through all the letters
    //and if we had encoutnered a vowel in the loop, we would have returned 
    //so this means the word has no vowel.
    return -1;
}
console.log(indexOfVowel("create"));

