let backGuitar;

function preload(){
  backGuitar = loadImage("assets/images/guitar.png");
}
function setup(){
  canvas = createCanvas(1000,412);
  //canvas.parent("canvasContainer");
}

function draw(){
  background(image(backGuitar,0,0));
  //image(backGuitar,0,0);

}
