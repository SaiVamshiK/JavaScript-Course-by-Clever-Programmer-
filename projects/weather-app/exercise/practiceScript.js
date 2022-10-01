const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6101b6e284msh630f9ba85ee2dcdp1d127ajsn4c1a6c4412a9',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

const BASE_URL = 'https://open-weather13.p.rapidapi.com/city/'
let inputValue = document.getElementById('city-input')
let cityNameTag = document.getElementById('city-name')
let weatherTypeTag = document.getElementById('weather-type')
let tempTag = document.getElementById('temp')
let minTempTag = document.getElementById('min-temp')
let maxTempTag = document.getElementById('max-temp')

const getDataJSON = async (fetchURL) => {
    let data = null;
    let dict = {
        'name' : '',
        'type' : '',
        'temp' : '',
        'minTemp' : '',
        'maxTemp' : ''
    }
    try{
        let response = await fetch(fetchURL,options)
        data = await response.json()
        dict.name = data.name
        dict.type = data.weather[0].main
        dict.temp = data.main.temp
        dict.minTemp = data.main.temp_min
        dict.maxTemp = data.main.temp_max
        console.log("Name: "+dict.name)
        console.log("Type: "+dict.type)
        console.log("Temp: "+dict.temp)
        console.log("Min Temp: "+dict.minTemp)
        console.log("Max Temp: "+dict.maxTemp)
        return dict
    }catch(error){
        console.log("Error: "+error)
        return dict
    }
}

function searchCity(){
    let cityName = inputValue.value
    let fetchURL = BASE_URL + cityName
    getDataJSON(fetchURL)
    .then((dict) => {
        cityNameTag.innerText = dict.name
        weatherTypeTag.innerText = dict.type
        tempTag.innerText = dict.temp
        minTempTag.innerText = dict.minTemp
        maxTempTag.innerText = dict.maxTemp
    })
    .catch((error) => {
        cityNameTag.innerText = ''
        weatherTypeTag.innerText = ''
        tempTag.innerText = ''
        minTempTag.innerText = ''
        maxTempTag.innerText = ''
    })
}