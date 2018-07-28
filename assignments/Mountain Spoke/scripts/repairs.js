//connection to api
let repairsRequest = new XMLHttpRequest();
let apiURL = 'https://soderborg-bonnie.github.io/MountainSpoke/data/repairs.json';
repairsRequest.open('GET', apiURL, true);
repairsRequest.send();

repairsRequest.onload = function () {
    let repairsData = JSON.parse(repairsRequest.responseText);
    document.getElementById('chain').innerHTML = repairsData.repairs[0].chain;
    document.getElementById('tire').innerHTML = repairsData.repairs[0].tire;
    document.getElementById('onceOver').innerHTML = repairsData.repairs[0].onceOver;
    document.getElementById('standard').innerHTML = repairsData.repairs[0].standard;
    document.getElementById('deluxe').innerHTML = repairsData.repairs[0].deluxe;
    document.getElementById('overhaul').innerHTML = repairsData.repairs[0].overhaul;


}
