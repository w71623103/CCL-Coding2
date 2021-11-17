let pPos = document.getElementById("playerRange");

let levelRadios =[];
levelRadios.push(document.getElementById("level1"));
levelRadios.push(document.getElementById("level2"));
levelRadios.push(document.getElementById("level3"));
console.log(levelRadios[0].checked);
console.log(levelRadios[1].checked);
console.log(levelRadios[2].checked);
//console.log(pPos.value);
let player;
let bombs = [];
let timer = 500;
let bombTotal = 5;
let levelOfDiff; //1,2,3
if(levelRadios[0].checked){
  levelOfDiff = 1;
}else if(levelRadios[1].checked){
  levelOfDiff = 2;
}else if(levelRadios[3].checked){
  levelOfDiff = 3;
}
let respawnTimer = 300;
function setup() {
  player = new Player(width/2,height*3,levelOfDiff);
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasContainer");
}

function draw() {

  // console.log(levelRadios[0].value);
  // console.log(levelRadios[1].value);
  // console.log(levelRadios[2].value);
  background(220);
  if(player.hp>0){
    respawnTimer = 300;
    UI()
    if(timer <= 360-60*(levelOfDiff-1)){
      timer++;
    }else{
      timer = 0;
      for(let i = 0; i < bombTotal*levelOfDiff; ++i){
        bombs.push(new Bomb());
      }
    }



    for(let i = 0; i < bombs.length; ++i){
      bombs[i].update(i);

      if(dist(player.x,player.y, bombs[i].x, bombs[i].y) < 30){
        bombs.splice(i,1);
        player.hp--;
      }
    }


    for(let i = 0; i < bombs.length; ++i){
      if(bombs[i].y > height){
        bombs.splice(i,1);
      }


    }
    //console.log(pPos.value);
    let newPosX = map(pPos.value,0,100,0,width);
    player.update(newPosX);
    //console.log(player.hp);
  }else{
    bombs.splice(0);
    if(respawnTimer <= 0){
      if(levelRadios[0].checked){
        levelOfDiff = 1;
      }else if(levelRadios[1].checked){
        levelOfDiff = 2;
      }else if(levelRadios[2].checked){
        levelOfDiff = 3;
      }
      player.hp = 3 +(2*levelOfDiff);

    }else{
      respawnTimer--;
      text("restart in: ",width/2 - 100,height/2);
      text(int(respawnTimer/60), width/2 + 20, height/2);
    }
  }

}
class Bomb{
  constructor(){
    this.x = random(0,width);
    this.y = random(-height*0.3,0);
    this.speed = random(1.8,5)*((levelOfDiff+1)*0.5);
  }

  display(){
    push();
    translate(this.x,this.y);
    fill("black");
    circle(0,0,30);
    pop();
  }

  update(i){
    this.y += this.speed;
    this.display();
    this.index = i;

  }
}


class Player {
  constructor(startX, startY, levelOfDiff=1) {
    this.x = startX;
    this.y = startY;
    this.ArmRotation = 0;
    this.hp = 3 +(2*levelOfDiff);
    this.coin = 0;

  }
  update(x) {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //console.log(x);

    this.ArmRotation += 1;
    this.x = x;
    this.display();
  }
  display() {
    push();

    pop();
    translate(this.x, this.y);
    push();
    rectMode(CENTER);


    this.body();
    pop();
  }

  body() {
    push();
    fill("red");
    circle(0, 0, 30);
    stroke("blue")

    this.drawArm(1);
    this.drawArm(-1);

    pop();
  }

  drawArm(isRight) {
    push();
    translate(isRight * 15, 0);
    rotate(sin(radians(isRight * this.ArmRotation)));
    push();
    fill("white");
    for(let i = 3; i > 0; --i){
      circle(0,0,i*5);
    }
    pop();
    line(0, 0, isRight * 50, 0);
    for(let i = 0; i < 3; ++i){
      push();
      rotate(isRight * radians(i*5));
      this.drawArmNext(isRight);
      pop();
    }

    pop();
  }

  drawArmNext(isRight) {
    push();
    translate(isRight * 50, 0);

    push();
    fill("white");
    for(let i = 3; i > 0; --i){
      circle(0,0,i*5);
    }
    pop();

    rotate(sin(-radians(isRight * this.ArmRotation)));

    line(0, 0, isRight * 20, 0);
    pop();

  }

}


function UI(){
  textSize(24);
  text("Life Count:",10,48);
  text(player.hp, 138,48);
}
