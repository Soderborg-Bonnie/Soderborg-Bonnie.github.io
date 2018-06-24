var minTemp = parseInt(document.getElementById("min-temp").innerHTML);
var maxTemp = parseInt(document.getElementById("max-temp").innerHTML);
var speed = parseInt(document.getElementById("wind-speed").innerHTML);
var avTemp = (minTemp + maxTemp)/2;
var power = Math.pow(speed, 0.16);
var windChill = 35.74 + (0.6215*avTemp) - (35.75*power) + (0.4275*avTemp*power);
document.getElementById("wind-chill").innerHTML = Math.round(windChill);