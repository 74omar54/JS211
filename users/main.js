
console.log('Loading up the main JS file ')

// erase and rety
console.log('About to make a fetch call');
let fetchPromise = window.fetch("https://randomuser.me/api/?results=5");
let jsonPromise = fetchPromise.then(function(data){
    console.log('Fetch call finished')
    return data.json()
});
jsonPromise.then(function(json){
    console.log("Have the actual payload", json);
    process(json.results)
})

console.log("After the fetch call");

function process(users){
    let ul = document.getElementById('people');

    users.forEach(function(user){
        console.log("User first name", user.name.first);

        let li = document.createElement('li');
        ul.appendChild(li);
        

        let img = document.createElement('img');
        li.appendChild(img);
        let userImage = user.picture.large;
        img.src = userImage;
        //todo: got to set the src on the image tag

        let nameDiv = document.createElement("div");
        li.appendChild(nameDiv);
        let userName = `Name: ${user.name.first} ${user.name.last}`;
        nameDiv.innerText = userName;
        

        //todo: got to set the src on the nameDiv


        let addressDiv = document.createElement("div");
        li.appendChild(addressDiv);
        let userAdress = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city} ${user.location.state} ${user.location.postcode}`;
        addressDiv.innerText = userAdress;
        addressDiv.id = 'theAddress';
        addressDiv.style.visibility = 'hidden';
        //todo got to set the text inside the adress 
        

    

        nameDiv.addEventListener("click", function(){
            console.log("your click was recieved")
            //let theAddress = document.getElementById('theAddress');
            if (addressDiv.style.visibility === 'hidden'){
                addressDiv.style.visibility = 'visible';
            }
            else {
                addressDiv.style.visibility = 'hidden';
            }
            
           
            //have to add a listner to the nameDiv, so when the nameDiv is clicked
            //if the address div is hidden, then it should change the showing
            //else if the adress div is not hidden, then it should change to hidden

        });
    })
}