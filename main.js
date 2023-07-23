// https://restcountries.com/v3.1/all
// API by name https://restcountries.com/v3.1/name/aruba?fullText=true

// Elements 
const searchField = document.querySelector("#search")
const selectCountry = document.querySelector(".form-select")

// Event Listener 
searchField.addEventListener("submit", getSearch)
selectCountry.addEventListener("change", chooseCountry)

//Dropdown functions
function chooseCountry(e){
    const countryOption = e.target.value
    fetch(`https://restcountries.com/v3.1/name/${countryOption}?fullText=true`)
    .then(response => response.json())
    .then(data => displayValues(data))
}

// Function Calls
getCountries()

 
// Collecting Data Fetch Functions
function getSearch(e){
    e.preventDefault()
    const userInput = e.target[0].value

    fetch(`https://restcountries.com/v3.1/name/${userInput}?fullText=true`)
    .then(res => res.json())
    .then(data => displayValues(data))}
    //.catch(error =>  
       //const errorMessage = `Country not found: ${error}`)}

    
function getCountries(){
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => renderCountriesDropDown(data))
}

// Render and Iterator functions
function renderCountriesDropDown(data){

    data.forEach(country => {

        const option = document.createElement("option")
        option.value = country.name.common
        option.textContent = country.name.common
        selectCountry.append(option)
        
    })}


function displayValues(data){
    const countryCard = document.querySelector(".card")
    const cardBody = document.querySelector(".card-body")
    const list = document.querySelector(".list-group")
    cardBody.replaceChildren()
    //countryCard.replaceChildren()

    list.replaceChildren()
    data.forEach(country => {
        
    const countryName = document.createElement("h2")
    countryName.class = "card-title"
    countryName.textContent = country.name.common

    const flagImage = document.createElement("img")
    flagImage.id = "img-flag"
    flagImage.src = country.flags.svg
    flagImage.rel = country.flags.rel
    flagImage.style.width = "25%"
    flagImage.style.padding = "10px"
        
        
    const coatOfArms = document.createElement("img")
    coatOfArms.id = "img coatOfArms"
    coatOfArms.src = country.coatOfArms.svg
    coatOfArms.style.width = "10%"
        
        
        
    // Section for  text information about countries 
        
    const capital = document.createElement("li")
    capital.class= "list-group-item"
    capital.textContent = `Capital: ${country.capital}`
        
    const continent = document.createElement("li")
    continent.class= "list-group-item"
    continent.textContent =  ` Continents: ${country.continents}`
        
        
    const currenciesTag = document.createElement("li")
    currenciesTag.class= "list-group-item"
    const currencyKey = Object.keys(country.currencies)[0]
    const currencyName = country.currencies[currencyKey].name
    currenciesTag.textContent = `Currency: ${currencyName}`
        
    const languages = document.createElement("li")
    languages.class= "list-group-item"
    const languagesKey = Object.keys(country.languages)[0]
    const languageValue = country.languages[languagesKey]
    languages.textContent = `Majority Language: ${languageValue}`
        
    const mapLink = document.createElement("a")
    mapLink.class= "list-group-item"
    mapLink.href = country.maps.googleMaps
    mapLink.textContent = "Google map"
    mapLink.target = "blank"
        
    // Append
    list.append(capital,continent,languages,currenciesTag)
    cardBody.append(countryName,flagImage,coatOfArms,list,mapLink)
    countryCard.append(cardBody)
})}