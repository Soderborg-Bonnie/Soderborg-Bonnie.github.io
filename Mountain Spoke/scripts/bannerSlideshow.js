var i = 0;
var images = [];
var time = 3500;

images[0] = "portermtb2";
images[1] = "portermtb3";
images[2] = "portermtb4";

function changePic(){
document.slide.src = images[i];
if (i<images.length-1){
i++;}
else{
i=0;
}
setTimeout("changePic()", time);
}
window.onload = changePic;