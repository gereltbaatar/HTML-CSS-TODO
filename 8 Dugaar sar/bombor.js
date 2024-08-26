const buttonW = document.querySelector(`.tochW`);
const buttonA = document.querySelector(`.tochA`);
const buttonS = document.querySelector(`.tochS`);
const buttonD = document.querySelector(`.tochD`);
const buttonJ = document.querySelector(`.tochJ`);
const buttonK = document.querySelector(`.tochK`);
const buttonL = document.querySelector(`.tochL`);

window.addEventListener("keydown", keyClickW);
window.addEventListener("keydown", keyClickA);
window.addEventListener("keydown", keyClickS);
window.addEventListener("keydown", keyClickD);
window.addEventListener("keydown", keyClickJ);
window.addEventListener("keydown", keyClickK);
window.addEventListener("keydown", keyClickL);

const drum1 = new Audio("./tom1.mp3");
const drum2 = new Audio("./tom2.mp3");
const drum3 = new Audio("./tom3.mp3");
const drum4 = new Audio("./tom4.mp3");
const drum5 = new Audio("./snare.mp3");
const drum6 = new Audio("./crash.mp3");
const drum7 = new Audio("./kickbass.mp3");

buttonW.addEventListener("click", playAudioW);
buttonA.addEventListener("click", playAudioA);
buttonS.addEventListener("click", playAudioS);
buttonD.addEventListener("click", playAudioD);
buttonJ.addEventListener("click", playAudioJ);
buttonK.addEventListener("click", playAudioK);
buttonL.addEventListener("click", playAudioL);

function keyClickW(event) {
  if (event.key == "w" || event.key == "W") {
    drum1.cloneNode().play();
  }
}

function keyClickA(event) {
  if (event.key == "a" || event.key == "A") {
    drum2.cloneNode().play();
  }
}

function keyClickS(event) {
  if (event.key == "s" || event.key == "S") {
    drum3.cloneNode().play();
  }
}

function keyClickD(event) {
  if (event.key == "d" || event.key == "D") {
    drum4.cloneNode().play();
  }
}

function keyClickJ(event) {
  if (event.key == "j" || event.key == "J") {
    drum5.cloneNode().play();
  }
}

function keyClickK(event) {
  if (event.key == "k" || event.key == "K") {
    drum6.cloneNode().play();
  }
}

function keyClickL(event) {
  if (event.key == "l" || event.key == "L") {
    drum7.cloneNode().play();
  }
}

function playAudioW() {
  drum1.cloneNode().play();
}

function playAudioA() {
  drum2.cloneNode().play();
}

function playAudioS() {
  drum3.cloneNode().play();
}

function playAudioD() {
  drum4.cloneNode().play();
}

function playAudioJ() {
  drum5.cloneNode().play();
}

function playAudioK() {
  drum6.cloneNode().play();
}

function playAudioL() {
  drum7.cloneNode().play();
}
