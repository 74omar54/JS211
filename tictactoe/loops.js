//loops
//give it a condition and it will continue untill the condition is met

//PART1 : Do this one time, before the loop starts
//PART2 : Do this before every iteration to see if the loop shall continue shall recieve true or false
//PART3 : The actual work that the iteration needs to do
//PART4 : do this at the end of the iteration to prepare for the next iteration


// print the numbers 1 through 10

//print the even number between 1 and 10;

// for (let i = 1; i <= 10; i= i+1){
//     //only print when the remainder is equal to 0
//     //when divided by 2

//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

let friends = [
    {"name": "Jenny", "favoriteColor": "yellow"},
    {"name": "Tony", "favoriteColor": "red"},
    {"name": "Cam", "favoriteColor": "orange"},
    {"name": "Trev", "favoriteColor": "blue"}
]


for (i = 0; i < friends.length; i = i+1){
    
    //console.log("Hi ", friends[i].name, " I know your favorite color is ", friends[i].favoriteColor, " but have you considered grey?");
    console.log(`Hi, ${friends[i].name} I know your favorite color is ${friends[i].favoriteColor}, but have you considered grey?`)
}

//write a for loop that prints the statement 
//"Hi ", [name] I know your favorite color is [favorite color], but have you considered gray?

//hint, use a loop
//hint2, use object dot notation
