// define html static selector
var cityEl = document.querySelector("#city")
var cityFormEl = document.querySelector("#city-form")
var cityHeaderEl = document.querySelector("#city-header")
var tempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidityEl = document.querySelector("#humidity")
var uviEl = document.querySelector("#uvi")
var api = "e2a55cad5967756d2d33cb0248914a00"
// cards
var cityHeader1El = document.querySelector("#city-header-1")
var temp1El = document.querySelector("#temp-1")
var wind1El = document.querySelector("#wind-1")
var humidity1El = document.querySelector("#humidity-1")


var cityHeader2El = document.querySelector("#city-header-2")
var temp2El = document.querySelector("#temp-2")
var wind2El = document.querySelector("#wind-2")
var humidity2El = document.querySelector("#humidity-2")


var cityHeader3El = document.querySelector("#city-header-3")
var temp3El = document.querySelector("#temp-3")
var wind3El = document.querySelector("#wind-3")
var humidity3El = document.querySelector("#humidity-3")


var cityHeader4El = document.querySelector("#city-header-4")
var temp4El = document.querySelector("#temp-4")
var wind4El = document.querySelector("#wind-4")
var humidity4El = document.querySelector("#humidity-4")


var cityHeader5El = document.querySelector("#city-header-5")
var temp5El = document.querySelector("#temp-5")
var wind5El = document.querySelector("#wind-5")
var humidity5El = document.querySelector("#humidity-5")

// definition of functions

function displayWeather(event) {
    event.preventDefault()
    var cityName = cityEl.value
    var urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`

    fetch(urlCurrent)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {
            console.log(currentData)
            var fiveDayUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${api}&units=imperial`

            fetch(fiveDayUrl)
            .then(function(response){
                return response.json()
            })
            .then(function(fiveData){
                console.log(fiveData)
                cityHeaderEl.textContent= currentData.name
                tempEl.textContent= currentData.main.temp
                windEl.textContent= currentData.wind.speed
                humidityEl.textContent= currentData.main.humidity
                uviEl.textContent= fiveData.uvi
                // 5 days function
                
                
            })
        })

}

// addevent listener on Submit and create displayDashboard - shows current weather and last five days

cityFormEl.addEventListener("submit", displayWeather)
