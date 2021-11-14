      //
      // let i = 1;
      // i++;
      // alert(i);
      //
      // alert("how dare you open my index page.")
function say(what){
  console.log(what);
  let elem = document.getElementById('lyrics');

  let newElem = document.createElement('p');

  newElem.innerHTML = what;

  elem.appendChild(newElem);
}

function toCircle(){
  let elem = document.getElementById('rect');
  elem.style.borderRadius = '50px';
}

function toRect(){
  let elem = document.getElementById('rect');
  elem.style.borderRadius = '0px';
}

let circleButton = document.getElementById("circleButton");
circleButton.addEventListener('click',toCircle);

let rectButton = document.getElementById("rectButton");
rectButton.addEventListener('click',toRect);
