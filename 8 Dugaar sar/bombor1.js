const sound = [
  (drum1 = new Audio("./tom1.mp3")),
  (drum2 = new Audio("./tom2.mp3")),
  (drum3 = new Audio("./tom3.mp3")),
  (drum4 = new Audio("./tom4.mp3")),
  (drum5 = new Audio("./snare.mp3")),
  (drum6 = new Audio("./crash.mp3")),
  (drum7 = new Audio("./kickbass.mp3")),
];

const drums = document.getElementsByClassName("key");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", touch);
  function touch() {
    // console.log("asd");
    sound[i].cloneNode().play();
  }
}

document.body.addEventListener("keydown", touch2);

function touch2(event) {
  switch (event.key) {
    case "w":
      sound[0].cloneNode().play();
      break;
    case "a":
      sound[1].cloneNode().play();
      break;
    case "s":
      sound[2].cloneNode().play();
      break;
    case "d":
      sound[3].cloneNode().play();
      break;
    case "j":
      sound[4].cloneNode().play();
      break;
    case "k":
      sound[5].cloneNode().play();
      break;
    case "l":
      sound[6].cloneNode().play();
      break;
  }
}
