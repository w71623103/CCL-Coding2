let img = [];
let timer = 0;
let subTimerInterval = document.getElementById("speedController");
let subTimer = subTimerInterval.value;

function preload(){
  // img.push(loadImage("assets/images/horse1.jpg"));
  // img.push(loadImage("assets/images/horse2.jpg"));
  // img.push(loadImage("assets/images/horse3.jpg"));
  // img.push(loadImage("assets/images/horse4.jpg"));
  // img.push(loadImage("assets/images/horse5.jpg"));
  // img.push(loadImage("assets/images/horse6.jpg"));
  // img.push(loadImage("assets/images/horse7.jpg"));
  // img.push(loadImage("assets/images/horse8.jpg"));
  // img.push(loadImage("assets/images/horse9.jpg"));
  // img.push(loadImage("assets/images/horse10.jpg"));
  // img.push(loadImage("assets/images/horse11.jpg"));
  for (let i = 1; i <= 11; i++) {
    let path = "assets/images/horse"+i+".jpg";
    img.push(loadImage(path));
  }

}

function setup(){
  canvas = createCanvas(400,400);
  canvas.parent("canvasContainer");
}

function draw(){
  if(subTimer <= 0){
    timer++;
    subTimer = map(subTimerInterval.value,1,8,8,1);
  }else{
    subTimer--;
  }

  background(0);
  image(img[timer%11],0,0);

}
