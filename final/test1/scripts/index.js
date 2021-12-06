let background;
let canvas;

function preload(){
  background = loadImage("assets/images/index.png");
}

function setup(){
  canvas = createCanvas(windowWidth-2,windowHeight-5);
}

function draw(){
  image(background,0,0);

  if(mouseIsPressed){
    console.log("I should be transported")
    Window.location.herf = "guitar.html";
  }
}
