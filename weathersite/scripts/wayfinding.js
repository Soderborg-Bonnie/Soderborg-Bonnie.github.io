var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF !== "") {
    var menu = document.querySelectorAll('ul#primaryNav li a');
    var i;

    for(var i=0; i<menu.length; i++){
        var currentURL = (menu[i].getAttribute("href"));
        menu[i].parentNode.className="";
        if (currentURL === pageHREF) {
            menu[i].parentNode.className="active";
        } 
    }
}