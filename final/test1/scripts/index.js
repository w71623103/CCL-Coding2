let backGuitar;
let imgW = 1000;
let imgH = 412;
let w,h;

let stringStartPos = [434,268];
let stringColSiz = [750,6];
let stringStep = 8;

let strings = [];
let stringPic = [];
let string;

let modifier = [];
let sounds = [];

let stringColMargin = 3;

function preload(){
  backGuitar = loadImage("assets/images/guitar4.png");
  for (let i = 1; i <= 5; i++) {
    let path = "assets/images/string/string"+i+".png";
    stringPic.push(loadImage(path));
  }

  for(let i = 6; i >= 1; --i){
    let subSound = [];
    sounds.push(subSound);
    for(let j = 0; j <= 4; ++j){
      let path = "assets/audio/string/"+i+"-"+j+".mp3";
      sounds[6-i].push(loadSound(path));
    }
  }
}

function setup(){
  for(let i = 0; i < 6; ++i){
    strings.push(new GuitarString(i));
  }
  w = windowWidth;
  h = (imgH/imgW)*w
  //canvas = createCanvas(w,h);
  canvas = createCanvas(windowWidth,windowHeight);
  //canvas.parent("canvasContainer");

  for(let i = 1; i <= 6; ++i){
    modifier.push(document.getElementById("string"+i));
  }
}

function draw(){


  background(30);

  image(backGuitar,0,0);


  for(let i = 0; i < 6; ++i){
    strings[i].update();
  }
  //image(backGuitar,0,0, w, h);
  // circle(mouseX, mouseY, 50)
  //stringExamine();
  if(mouseIsPressed){
    if(mouseX > stringStartPos[0] && mouseX < stringStartPos[0]+stringColSiz[0])
    {
      for(let i = 0; i < 6; ++i){
        if(mouseY > stringStartPos[1]+i*stringStep+i*stringColSiz[1] - stringColMargin && mouseY < stringStartPos[1]+i*stringStep+(i+1)*stringColSiz[1]+stringColMargin){
          console.log("string" + (i+1) +"is touched");
          strings[i].shake();
        }
      }
    }
  }
}

function stringExamine(){
  push();
  noFill();
  stroke("red");
  for(let i = 0; i < 6; ++i){
    rect(stringStartPos[0],stringStartPos[1]+i*stringStep+i*stringColSiz[1]-stringColMargin,stringColSiz[0],stringColSiz[1]+2*stringColMargin);
  }
  pop();
}


// function makeImgElm(p, i){
//   let div = document.createElement("div");
//   div.className = "stringContainer";
//   div.id = "astring"+i;
//   let img = document.createElement("img");
//   img.src=p;
//   div.appendChild(img);
//   //div.style.top = y+"px"
//   document.body.appendChild(div);
//   return img;
// }
class GuitarString{
  // constructor(path,i){
  //   this.paths = [];
  //   this.seq = i;
  //   for (let i = 1; i <= 5; i++) {
  //     this.paths.push(path+i+".png");
  //   }
  //   console.log(this.paths)
  //   this.elm = makeImgElm(this.paths[0], i+1);
  //   this.idx = 0;
  //   this.isShaking = false;
  //   this.continueTimer = 0;
  //   this.triggerTimer = 0;
  //
  // }
  constructor(i){
    this.seq = i;
    this.idx = 0;
    this.isShaking = false;
    this.continueTimer = 0;
    this.triggerTimer = 0;
  }
  update(){

    //this.elm.src = this.paths[this.idx%4]
    //console.log(mouseX,mouseY)
    image(stringPic[this.idx],435, 261+14*(this.seq));
    if(this.isShaking){
      this.continueTimer++;
      if(this.continueTimer % 5 == 4){
        this.idx++;
      }
      if(this.idx == 4) this.isShaking = false;
    }else{
      this.idx = 0;
      this.continueTimer = 0;
    }

  }

  shake(){
    if(this.triggerTimer <= 0){
      this.triggerTimer = 0.2;
      this.isShaking = true;
      this.makeSound();
    }else{
      this.triggerTimer -= deltaTime;
    }
  }

  makeSound(){
    console.log("string"+(this.seq+1)+"isplaying Sound");
    //let path = "assets/audio/string/"+(6-this.seq)+"-"+modifier[this.seq].value+".m4a";
    //console.log(path);
    //let stringSound = loadSound(path);
    //stringSound.play();
    sounds[this.seq][modifier[this.seq].value].play();
  }
}
