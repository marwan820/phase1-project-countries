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
    .then(data => iteratorFunction(data))}
    //.catch(error =>  
       //const errorMessage = `Country not found: ${error}`)}
    



function iteratorFunction(data){
    const countryContainer = document.querySelector(".country-container")
    countryContainer.replaceChildren()
    data.forEach(country => {

        console.log(country.altSpellings[1])
   
const title = document.createElement("h2")
title.id = "title"
title.textContent = country.name.common

const flagImage = document.createElement("img")
flagImage.id = "img-flag"
flagImage.src = country.flags.svg
flagImage.rel = country.flags.rel
flagImage.style.width = "50%"


const coatOfArms = document.createElement("img")
coatOfArms.id = "img coatOfArms"
coatOfArms.src = country.coatOfArms.svg
coatOfArms.style.width = "20%"
const captionCoatOfArms = document.createElement("figcaption")
captionCoatOfArms.classList = "coatOfArms-text"
captionCoatOfArms.textContent = "Coat of Arms"


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


const currenciesTag = document.createElement("p")
currenciesTag.id = "currencies"
const currencyKey = Object.keys(country.currencies)[0]
const currencyName = country.currencies[currencyKey].name
currenciesTag.textContent = `Currency: ${currencyName}`

const languages = document.createElement("p")
languages.id = "languages"
const languagesKey = Object.keys(country.languages)[0]
const languageValue = country.languages[languagesKey]
languages.textContent = `Majority Language: ${languageValue}`


const timeZones = document.createElement("p")
timeZones.id = "timezones"
timeZones.textContent=  `Time zone ${country.timezones}`
console.log(country)

const mapLink = document.createElement("a")
mapLink.id = "mapLink"
mapLink.href = country.maps.googleMaps
mapLink.textContent = "Google map"
mapLink.target = "blank"

console.log(mapLink)
// Append
countryContainer.append(title,flagImage,coatOfArms,captionCoatOfArms)
dataText.append(capital,continent,languages,currenciesTag,timeZones,mapLink,)
countryContainer.append(dataText)})}
    


