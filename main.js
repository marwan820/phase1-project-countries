// https://restcountries.com/v3.1/all
// API by name https://restcountries.com/v3.1/name/aruba?fullText=true

// Elements 
const searchField = document.querySelector("#search")
const header = document.querySelector("header")
const selectCountry = document.querySelector("#country-select")

// selectCountry.addEventListener("change",

// Function Calls
getCountries()

 function getCountries(){
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => countrySelect(data))
}

 function countrySelect(data){
    data.forEach(country => {

        const option = document.createElement("option")
        option.value = country.name.common
        option.textContent = country.name.common
        selectCountry.append(option)
        
    })}

// Event Listener 
searchField.addEventListener("submit", getSearch)


// Collection Functions
function getSearch(e){
    e.preventDefault()
    const userInput = e.target[0].value

    fetch(`https://restcountries.com/v3.1/name/${userInput}?fullText=true`)
    .then(res => res.json())
    .then(data => iteratorFunction(data))}
    //.catch(error =>  
       //const errorMessage = `Country not found: ${error}`)}
    



function iteratorFunction(data){
    const countryContainer = document.querySelector(".country-container")
    countryContainer.replaceChildren()

    data.forEach(country => {

const countryName = document.createElement("h2")
countryName.id = "country-name"
countryName.textContent = country.name.common

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


// Section for  text information about countries 
const dataText = document.createElement("section")
dataText.classList = "dataText"

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
timeZones.textContent=  `Time zones ${country.timezones}`

const mapLink = document.createElement("a")
mapLink.id = "mapLink"
mapLink.href = country.maps.googleMaps
mapLink.textContent = "Google map"
mapLink.target = "blank"

// Append
countryContainer.append(countryName,flagImage,coatOfArms,captionCoatOfArms)
dataText.append(capital,continent,languages,currenciesTag,timeZones,mapLink,)
countryContainer.append(dataText)})}




