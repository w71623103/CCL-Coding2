let mic;

function preload(){
  // mySound = loadSound("assets/sounds/song.mp3")
}

function setup(){
  let canvas = createCanvas(500, 500);
  canvas.mousePressed(userStartAudio);

  mic = new p5.AudioIn();
  mic.start();

};


function draw(){
  background(0);


  let level = mic.getLevel();
  console.log(level)
  let size = map(level, 0, 0.2, 10, width/2);
  circle(width/2, height/2, size);


};

// function mousePressed(){
//   mySound.play();
// }
