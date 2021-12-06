let background;
let canvas;
let imgW = 1500;
let imgH = 618;
let w,h;

function preload(){
  background = loadImage("assets/images/index.png");
}

function setup(){
  w = windowWidth<1500? windowWidth:1500;
  h = (imgH/imgW)*w
  //canvas = createCanvas(w,h);
  // let canvas = createCanvas(windowWidth-2,windowHeight-5);
  let canvas = createCanvas(w,h);
  canvas.parent("canvasContainer");
}

function draw(){
  image(background,0,0);

  // if(mouseIsPressed){
  //   console.log("I should be transported");
  //   window.location.href = "guitar.html";
  // }
}

function mousePressed(){
  if(mouseX > windowWidth/2-0.3*windowWidth && mouseX < windowWidth/2+0.3*windowWidth){
    if(mouseY > windowHeight/2-0.3*windowHeight && mouseY < windowHeight/2+0.3*windowHeight){
      console.log("I should be transported");
      window.location.href = "guitar";
    }
  }

}

function windowResized() {
  w = windowWidth<1500? windowWidth:1500;
  h = (imgH/imgW)*w
  resizeCanvas(w, h);
}
