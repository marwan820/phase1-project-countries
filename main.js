// https://restcountries.com/v3.1/all

// Elements 
const searchBar = document.querySelector("#search")
const countryContainer = document.getElementsByClassName("country-container")
console.log(countryContainer)


// Function Calls
getSelection()



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


// Iterator Function
// To create elements and Added to a forEach method

//function iteratorFunction(countries){
   // const title = countries.name
   // const capital
   // const currencies
   // const languages
   // const flags
   // const maps
   // const timeZones

    
    

