'use strict'

console.log("loading main.js");
//getting the addButton, and adding a click event listener
let theAddButton = document.getElementById("addButton");
theAddButton.addEventListener('click',function (){
    // when the gets clicked, we will read the input from the input box
    let theInputBox = document.getElementById("inputBox");
    let item = theInputBox.value;
    console.log("the input was", theInputBox.value);
    

    let li = document.createElement("li");
    let myList = document.getElementById("theList");
    li.innerText = item;

    myList.appendChild(li);

    theInputBox.value = '';
    addLiEvent(li);



} )

function addLiEvent(li){
    li.addEventListener('click', function (){
        let classes = li.classList;
        if(classes.contains("done")){
            li.classList.remove("done");
        } else {
            li.classList.add("done");
        }
    } )

}