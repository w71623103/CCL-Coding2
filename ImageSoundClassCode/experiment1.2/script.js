
console.log("hello")

let img;
let imgArray = [];
let horseIndex = 0;


let horseX = 100;

function preload(){

  for(let i = 1; i < 12; i ++ ){
    // console.log("assets/images/horse"+i+".jpg")
    let path = "assets/images/horse"+i+".jpg";
    console.log("loading", path)
    let img = loadImage(path);
    imgArray.push(img);
  }
  console.log(imgArray)
  // img = loadImage("assets/images/horse1.jpg");
}

function setup(){
  createCanvas(800, 300);
}

function draw(){
  background(0);

  image(imgArray[horseIndex], horseX, 0, 200, 150);
  filter(INVERT);
  horseIndex++;
  if(horseIndex>10){
    horseIndex=0;
  }


  // image(img, horseX, 0, 200, 150);

  horseX+=10;
  if(horseX>width){
    horseX = -200;
  }


}
