const numbers = document.querySelectorAll(`.numbers`);
const result = document.querySelector(`.result span`);
const sings = document.querySelector(`.sign`);
const equals = document.querySelector(`.equals`);
const clear = document.querySelector(`.clear`);
const negative = document.querySelector(`.negative`);
const persent = document.querySelector(`.persent`);

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener(`click`, (e) => {
    let atr = e.target.getAttribute(`value`);
    if (isFirstValue === false) {
      getAttribute(atr);
    }
    if (isSecondValue == false) {
      getSecondValue(atr);
    }
  });
}

function getAttribute(el) {
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
  firstValue = +firstValue;
}

function getSecondValue(el) {
  if (firstValue != "" && sign != "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}

function getSign() {
  for (let i = 0; i < sings.length; i++) {
    sings[i].addEventListener(`click`, (e) => {
      sign = e.target.getAttribute(`value`);
      isFirstValue = true;
    });
  }
}
getSign();

equals.addEventListener(`click`, () => {
  result.innerHTML = "";
  if (sign === "+") {
    resultValue = firstValue + secondValue;
  } else if (sign === "-") {
    resultValue = firstValue - secondValue;
  } else if (sign === "x") {
    resultValue = firstValue * secondValue;
  } else if (sign === "/") {
    resultValue = firstValue / secondValue;
  }
  result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
});

// function checkResultLength() {
//   resultValue = JSON.stringify(resultValue);

//   if (resultValue.length >= 8) {
//     result.innerHTML = resultValue.toFixed(5);
//   }
// }

// negative.addEventListener(`click`, () => {
//   result.innerHTML = "";
//   if (firstValue != "") {
//     resultValue = firstValue / 100;
//     firstValue = resultValue;
//   }
//   result.innerHTML = resultValue;
// });
