// https://restcountries.com/v3.1/all
// API by name https://restcountries.com/v3.1/name/aruba?fullText=true

// Elements 
// Create elements and Add to an Iterator
const countryContainer = document.querySelector(".country-container")



const searchBar = document.querySelector("#search")



// Function Calls
getSelection()
//iteratorFunction()



// Collection Functions
function getSelection(){
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => iteratorFunction(data))}

// Render Functions
//function eventHandler(e){
//    console.log(e.target.value)
//}


// Event Listeners

//searchBar.addEventListener("search", eventHandler)

function iteratorFunction(data){
    data.forEach(country => {
        
    ;
   
const title = document.createElement("h2")
title.id = "title"
title.textContent = country.name.common
console.log(title)


const flagImage = document.createElement("img")
flagImage.id = "img-flag"
flagImage.src = country.flags.svg
flagImage.rel = country.flags.rel

const coatOfArms = document.createElement("img")
coatOfArms.id = "img coatOfArms"
coatOfArms.src = coatOfArms.svg

// Section for information about countries 
const dataText = document.createElement("div")
dataText.classList = "dataText"
//

const capital = document.createElement("p")
capital.id = "capital"
capital.textContent = `Capital: ${country.capital}`

const continent = document.createElement("p")
continent.id = "continent"
continent.textContent =  ` Continents: ${country.continents}`


const currencies = document.createElement("p")
currencies.id = "currencies"
currencies.textContent = `Currencies: ${country.currencies}`

const languages = document.createElement("p")
languages.id = "languages"
languages.textContent =  `Languages: ${country.languages}`


const timeZones = document.createElement("p")
timeZones.id = "timeZones"
timeZones.textContent=  ` Time zone ${country.timeZones}`

const mapLink = document.createElement("p")
mapLink.id = "mapLink"
mapLink.href = country.maps
mapLink.rel = "Google map it"

// Append
dataText.append(capital,continent,currencies,mapLink,timeZones,languages)
countryContainer.append(dataText)
})}
    


