
      var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

let anywhere = document.getElementById('anywhere');
let body = document.getElementById('body');
let directions = document.getElementById('directions');
let videoE = document.getElementById('videoElement');
let sc = document.getElementById('sc');
let header = document.getElementById('header');
var clickIndex = 0;
var hideIndex = 0;

body.onclick = function() {
  if (clickIndex == 1){
    console.log("clicked again")
    displayVideo();
    clickIndex = 2;
  }
  if (hideIndex == 1){
    console.log("hide")
    hideAll();
    hideIndex = 0;
  }
  if (clickIndex == 0) { 
    setTimeout(displayFunction, 200)
  };
  console.log("clicked");
  if (clickIndex != 2){clickIndex = 1;} else {hideIndex = 1;}
}

body.onload = function(){ 
  if (hideIndex == 0){
  setTimeout(showAnywhere, 1000)
  clickIndex = 0;
};
};

function displayVideo(){
  console.log("directions shown");
  videoE.style.display = "block";
  videoE.style.visibility = "visible";
  videoE.style.opacity = "1";
  sc.style.display = "block";
  sc.style.visibility = "visible";
  sc.style.opacity = "1";
}

function displayFunction(){

  console.log("directions shown");
  directions.style.display = "block";
  directions.style.visibility = "visible";
  directions.style.opacity = "1";
}

  

function showAnywhere(){

  console.log("anywhere shown");
  anywhere.style.display = "block";
  anywhere.style.visibility = "visible";
  anywhere.style.opacity = "1";
}

function hideAll(){
  console.log("hide");
  anywhere.style.display = "none";
  anywhere.style.visibility = "hidden";
  anywhere.style.opacity = "0";
  directions.style.display = "none";
  directions.style.visibility = "hidden";
  directions.style.opacity = "0";
  videoE.style.display = "none";
  videoE.style.visibility = "hidden";
  videoE.style.opacity = "0";
  sc.style.display = "none";
  sc.style.visibility = "hidden";
  sc.style.opacity = "0";
  header.style.display = "none";
  header.style.visibility = "hidden";
  header.style.opacity = "0";
  body.style.backgroundImage = "url(images/lamp.png)"
}