// https://restcountries.com/v3.1/all

// Elements 


// Function Calls
getSelection()


// Collection Functions
function getSelection(){
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(countries => console.log(countries))
}

// Render Functions
////function renderCountry(countries){
//    countries.forEach(country => {
//        const Elements 
//        
//        
//    });
//}

``