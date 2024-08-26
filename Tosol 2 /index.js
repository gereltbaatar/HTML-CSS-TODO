const number = document.querySelector("p.number");
const main = document.querySelector("div.main");
const add = document.getElementById("add");
let about = document.createElement("div");
let numCount = 0;
const displayCoun = (numCount) => {
  number.innerHTML = numCount;
};

about.innerHTML = `    <div class="task"></div>`;
//function zone start ______________________________________

let array = [];

add.addEventListener("click", addTAsk);

function addTAsk() {
  console.log("ajilah");
  console.log(numCount);

  add.onclick = () => {
    numCount += 1;
    displayCoun(numCount);
  };
  main.appendChild(about);
}
//function zone end ______________________________________
