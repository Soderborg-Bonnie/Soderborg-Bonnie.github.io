//connection to api
let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);
    document.getElementById('name1').innerHTML = weatherData.towns[0].name;
    document.getElementById('motto1').innerHTML = weatherData.towns[0].motto;
    document.getElementById('founded1').innerHTML = weatherData.towns[0].yearFounded;
    document.getElementById('population1').innerHTML = weatherData.towns[0].currentPopulation;
    document.getElementById('rainfall1').innerHTML = weatherData.towns[0].averageRainfall;
    document.getElementById('events1-1').innerHTML = weatherData.towns[0].events[0];
    document.getElementById('events1-2').innerHTML = weatherData.towns[0].events[1];
    document.getElementById('events1-3').innerHTML = weatherData.towns[0].events[2];
    /*document.getElementById('1st-rainfall').innerHTML = weatherData.towns[0].rainfall;
    document.getElementById('1st-rainfall').innerHTML = weatherData.towns[0].rainfall;
    document.getElementById('1st-rainfall').innerHTML = weatherData.towns[0].rainfall;*/

    document.getElementById('name2').innerHTML = weatherData.towns[1].name;
    document.getElementById('motto2').innerHTML = weatherData.towns[1].motto;
    document.getElementById('founded2').innerHTML = weatherData.towns[1].yearFounded;
    document.getElementById('population2').innerHTML = weatherData.towns[1].currentPopulation;
    document.getElementById('rainfall2').innerHTML = weatherData.towns[1].averageRainfall;
    document.getElementById('events2-1').innerHTML = weatherData.towns[1].events[0];
    document.getElementById('events2-2').innerHTML = weatherData.towns[1].events[1];
    document.getElementById('events2-3').innerHTML = weatherData.towns[1].events[2];
    
    document.getElementById('name3').innerHTML = weatherData.towns[3].name;
    document.getElementById('motto3').innerHTML = weatherData.towns[3].motto;
    document.getElementById('founded3').innerHTML = weatherData.towns[3].yearFounded;
    document.getElementById('population3').innerHTML = weatherData.towns[3].currentPopulation;
    document.getElementById('rainfall3').innerHTML = weatherData.towns[3].averageRainfall;
    document.getElementById('events3-1').innerHTML = weatherData.towns[3].events[0];
    document.getElementById('events3-2').innerHTML = weatherData.towns[3].events[1];
    document.getElementById('events3-3').innerHTML = weatherData.towns[3].events[2];
}
