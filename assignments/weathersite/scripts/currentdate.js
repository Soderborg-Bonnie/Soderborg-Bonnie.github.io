var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var x = new Date();
var date = x.getDate();
var day = x.getDay();
var month = x.getMonth();
var year = x.getFullYear();

document.getElementById("currentdate").innerHTML = daysOfWeek[day] + ", " + date + " " + monthsOfYear[month] + " " + year;