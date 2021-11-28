let img;
let cam;
function setup() {
  createCanvas(640, 480); // default dimensions of webcam
  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(640, 480); // a blank image
}
function draw() {
  background(0);
  cam.loadPixels();
  img.loadPixels();
  for(let y = 0; y < img.height; ++y){
    for(let x = 0; x < img.width; ++x){

      let index = (x+y*img.width)*4;

      let r = cam.pixels[index+0];
      let g = cam.pixels[index+1];
      let b = cam.pixels[index+2];
      let a = cam.pixels[index+3];


      img.pixels[index+0] = r;
      img.pixels[index+1] = g;
      img.pixels[index+2] = b;
      img.pixels[index+3] = 255;
    }
  }
  // inside for-loops, manipulate the pixels
  // of img based on the pixels of cam.

  img.updatePixels();
  image(img, 0, 0);
}
