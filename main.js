// https://restcountries.com/v3.1/all

// Elements 
// Create elements and Add to an Iterator
const countryContainer = document.querySelector(".country-container")

const dataText = document.createElement("div")
dataText.classList = "dataText"

     
const title = document.createElement("h2")
title.setAttribute("id","title")
// title.textContent = "Hello"

const flagImage = document.createElement("img")
flagImage.classList = "img-flag"
// flagImage.src =

const coatOfArms = document.createElement("img")
coatOfArms.classList = "img coatOfArms"
// coatOfArms.src = 


const capital = document.createElement("h3")
capital.classList = "capital"
// capital.textContent

const continent = document.createElement("h3")
continent.classList = "continent"
// continent.textContent


const currencies = document.createElement("h3")
currencies.classList = "currencies"
// currencies.textContent

const languages = document.createElement("h3")
languages.classList = "languages"
// languages.textContent = 


const timeZones = document.createElement("h3")
timeZones.classList = "timeZones"
// timeZones.textContent= 

const mapLink = document.createElement("a")
mapLink.classList = "mapLink"
//mapLink.href





const searchBar = document.querySelector("#search")



// Function Calls
//getSelection()
iteratorFunction()



// Collection Functions
function getSelection(){
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => (console.log(data)))
}

// Render Functions
//function eventHandler(e){
//    console.log(e.target.value)
//}


// Event Listeners

//searchBar.addEventListener("search", eventHandler)



