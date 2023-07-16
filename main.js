// https://restcountries.com/v3.1/all
// API by name https://restcountries.com/v3.1/name/aruba?fullText=true

// Elements 
const searchBar = document.querySelector("#search")
const searchButton = document.querySelector("#button")
searchBar.addEventListener("search", getSelection)

// Collection Functions
function getSelection(e){
    const userInput = e.target.value
    fetch(`https://restcountries.com/v3.1/name/${userInput}?fullText=true`)
    .then(res => res.json())
    .then(data => iteratorFunction(data))
    .catch(error =>  
        errorMessage = `Country not found: ${error}`)}


function iteratorFunction(data){
    const countryContainer = document.querySelector(".country-container")
    countryContainer.replaceChildren()
    data.forEach(country => {
   
const title = document.createElement("h2")
title.id = "title"
title.textContent = country.name.common

const flagImage = document.createElement("img")
flagImage.id = "img-flag"
flagImage.src = country.flags.svg
flagImage.rel = country.flags.rel
flagImage.style.width = "50px"

const coatOfArms = document.createElement("img")
coatOfArms.id = "img coatOfArms"
coatOfArms.src = country.coatOfArms.svg
coatOfArms.style.width = "30%"


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
currencies.textContent = `Currencies: ${country[currencies]}`

const languages = document.createElement("p")
languages.id = "languages"
 let languagesdata = country.languages
languages.textContent =  `Languages: ${languagesdata}`


const timeZones = document.createElement("p")
timeZones.id = "timeZones"
timeZones.textContent=  ` Time zone ${country.timeZones}`

const mapLink = document.createElement("p")
mapLink.id = "mapLink"
mapLink.href = country.maps
mapLink.rel = "Google map it"

// Append
countryContainer.append(title,flagImage,coatOfArms)
dataText.append(capital,continent,currencies,mapLink,timeZones,languages)
countryContainer.append(dataText)})}
    


