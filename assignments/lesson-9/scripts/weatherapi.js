//connection to api
let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=abe6322112c2cacefa8f0f922c2e5779'
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
       let weatherData = JSON.parse(weatherRequest.responseText);
        //console.log(weatherData);


document.getElementById('current-temp').innerHTML = weatherData.main.temp;
let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
document.getElementById('weatherimage').src = imagesrc;
    
    
}    
    //let weatherSection = document.querySelector('');



