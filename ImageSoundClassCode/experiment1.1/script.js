
console.log("hello")

let img;


let horseX = 100;

function preload(){
  img = loadImage("assets/images/horse1.jpg");
}

function setup(){
  createCanvas(800, 300);
}

function draw(){
  background(0);
  image(img, horseX, 0, 200, 150);

  horseX+=2;
  if(horseX>width){
    horseX = -200;
  }


}
