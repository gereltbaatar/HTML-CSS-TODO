let input1 = document.getElementById("fistNum");
let input2 = document.getElementById("secondNum");
let input3 = document.getElementById("resultNum");
const check = document.querySelector(`.check`);
const restart = document.querySelector(`.restart`);

restart.addEventListener("click", rendomNum);
function rendomNum() {
  let x = Math.floor(Math.random() * 101);
  let y = Math.floor(Math.random() * 101);
  input1.value = x;
  input2.value = y;
}

// check.addEventListener("click", checkBU);
// function checkBU() {}

// document.getElementById("restart");
// addEventListener("click", generaterNumbers);
// function generaterNumbers() {
//   const num1 = Math.floor(Math.random() * 101);
//   const num2 = Math.floor(Math.random() * 101);

//   document.getElementById("fistNum").value = num1;
//   document.getElementById("secondNum").value = num2;
//   document.getElementById("resultNum");
// }

check.addEventListener("click", checkbt);
input3 = "";
function checkbt() {
  console.log("ajilah");
  // let input3 = parseInt(document.getElementById("resultNum").value);
  let niilber = parseInt(input3.value, 10);
  console.log(input3.value);
  if (niilber === x + y) {
    alert("Нийлбэр зөв байна.");
  } else {
    alert("Нийлбэр буруу байна.");
  }
}
