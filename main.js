// https://restcountries.com/v3.1/all

// Elements 
const searchBar = document.querySelector("#search")


// Function Calls
//getSelection()



// Collection Functions
function getSelection(){
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(countries => console.log(countries))
}

// Render Functions
function eventHandler(e){
    console.log(e.target.value)
}


// Event Listeners

searchBar.addEventListener("search", eventHandler)