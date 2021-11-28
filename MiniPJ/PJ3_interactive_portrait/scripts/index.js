let img;
let cam;
let isScaling = false;
let outerThreshold =  document.getElementById("thresholdVal");
console.log(outerThreshold);
let outerThreshold1 = 0.5;
function setup() {
  createCanvas( 640, 480 );

  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(width, height);
}

function draw() {
  background(50);

  cam.loadPixels();
  img.loadPixels();

  let gridSize = 15;
  noFill();
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {

      let index = (x + y*img.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let avg = (r + g + b) / 3;
      let threshold = outerThreshold.value;

      if (avg > 255 * threshold) {
        push();
        fill(r,g,b,255);
        //translate(x,y);
        if(isScaling) scale(random(0.8,1.2));
        //scale(index%2);
        rect(x, y, gridSize,gridSize);
        rect(x+gridSize, y, gridSize,gridSize);
        rect(x-gridSize, y, gridSize,gridSize);
        rect(x, y+gridSize, gridSize,gridSize);
        rect(x, y-gridSize, gridSize,gridSize);
        pop();
      }

      // }else{
      //   stroke(120);
      //   push();
      //   //translate(x,y);
      //   let angle = radians(index%15);
      //   //rotate(angle);
      //   rect(x, y, gridSize,gridSize);
      //   pop();
      // }

    }

  }

  // we don't draw the image.
  //img.updatePixels();
  //image(img, 0, 0);
}

function mousePressed(){
  if(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
  isScaling = !isScaling;
}
