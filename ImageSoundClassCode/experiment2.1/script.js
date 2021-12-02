let mySound;
let x;
let speed = 10;


function preload(){
  mySound = loadSound("assets/sounds/beat.mp3")
}

function setup(){
  let canvas = createCanvas(500, 500);
  canvas.mousePressed(userStartAudio);
  x = width/2;

};


function draw(){
  background(0);
  circle(x, height/2, 50);

  x+=speed;

  if(x>width-25){
    mySound.pan(1);
    speed *= -1;
    mySound.play();
  }else if(x < 25){
    mySound.pan(-1);
    speed *= -1;
    mySound.play();
  }
};

function mousePressed(){
  mySound.play();
}
