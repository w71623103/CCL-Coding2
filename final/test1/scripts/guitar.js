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

let stringColMargin = 5;

// let shapeMakingTrackX = [];
// let shapeMakingTrackY = [];
// let visualArray = [];

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
  canvas = createCanvas(windowWidth-2,windowHeight-5);
  //canvas.parent("canvasContainer");

  for(let i = 1; i <= 6; ++i){
    modifier.push(document.getElementById("string"+i));
  }
  // frameRate(120);
}

function draw(){

  //console.log(keyCode);
  //background(30);


  image(backGuitar,0,0);


  for(let i = 0; i < 6; ++i){
    strings[i].update();
  }
  // stringExamine();
  if(mouseIsPressed){
    //if mouse is in the string area
    if(mouseX > stringStartPos[0] && mouseX < stringStartPos[0]+stringColSiz[0]){
      for(let i = 0; i < 6; ++i){
        if(mouseY > stringStartPos[1]+i*stringStep+i*stringColSiz[1] - stringColMargin && mouseY < stringStartPos[1]+i*stringStep+(i+1)*stringColSiz[1]+stringColMargin){
          console.log("string" + (i+1) +"is touched");
          strings[i].shake();
          // shapeMakingTrackX.push(mouseX);
          // shapeMakingTrackY.push(mouseY);
        }
      }
    }
  }
  // else{
  //   visualArray.push(new mouseShape(shapeMakingTrackX,shapeMakingTrackY));
  //   shapeMakingTrackX.splice(0);
  //   shapeMakingTrackY.splice(0);
  // }

  // for(let i = 0; i < visualArray.length; ++i){
  //   if(visualArray[i].timer <= 0){
  //     visualArray.splice(i,1);
  //     --i;
  //   }
  // }
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
      this.triggerTimer = 0.005;
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

function keyPressed(){
  switch (keyCode) {
    case 67:
      //console.log("nothing");
      chord("c");
      break;
    case 71:
      //console.log("nothing");
      chord("g");
      break;
    case 65:
      //console.log("nothing");
      chord("a"); //am
      break;
    case 70:
      //console.log("nothing");
      chord("f");
      break;
    case 9:
      chord("none");
      break;

    case 68:
      chord("d"); //d7
      break;
    case 69:
      chord("e"); //em
      break;
  }
}

function chord(name){
  switch (name) {
    case "c":
      modifier[0].value = 0;
      modifier[1].value = 3;
      modifier[2].value = 2;
      modifier[3].value = 0;
      modifier[4].value = 1;
      modifier[5].value = 0;
      break;
    case "g":
      modifier[0].value = 3;
      modifier[1].value = 2;
      modifier[2].value = 0;
      modifier[3].value = 0;
      modifier[4].value = 0;
      modifier[5].value = 3;
      break;
    case "a":
      modifier[0].value = 0;
      modifier[1].value = 0;
      modifier[2].value = 2;
      modifier[3].value = 2;
      modifier[4].value = 1;
      modifier[5].value = 0;
      break;
    case "f":
    modifier[0].value = 0;
    modifier[1].value = 0;
    modifier[2].value = 3;
    modifier[3].value = 2;
    modifier[4].value = 1;
    modifier[5].value = 1;
      break;
    case "none":
      modifier[0].value = 0;
      modifier[1].value = 0;
      modifier[2].value = 0;
      modifier[3].value = 0;
      modifier[4].value = 0;
      modifier[5].value = 0;
      break;
    case "d":
      modifier[0].value = 0;
      modifier[1].value = 0;
      modifier[2].value = 0;
      modifier[3].value = 2;
      modifier[4].value = 1;
      modifier[5].value = 2;
      break;
    case "e":
      modifier[0].value = 0;
      modifier[1].value = 2;
      modifier[2].value = 2;
      modifier[3].value = 0;
      modifier[4].value = 0;
      modifier[5].value = 0;
      break;
  }
}

class mouseShape{
  constructor(xArray,yArray){
    this.xArray = xArray;
    this.yArray = yArray;
    this.timer = 5;
  }

  update(){
    if(this.timer >= 0){
      this.timer -= deltaTime;
      this.display();
    }
  }

  display(){
    push();
    scale(1/this.timer,1/this.timer);
    noFill();
    stroke(random(0,255),random(0,255),random(0,255));
    beginShape(CLOSED);
    if(this.xArray.length >= this.yArray.length){
      for(let i = 0; i < this.yArray.length; ++i){
        vertex(this.xArray[i],this.yArray[i]);
      }
    }
    endShape();
    pop();
  }
}
