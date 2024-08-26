// function hoyrtooniiniilber(number1, number2) {
//   return number1 + number2;
// }

// const name = prompt("neree oruulna uu?");
// const sum = hoyrtooniiniilber(1, 2);

// console.log(sum);

// 1. Check if Zero: Write a function isZero that takes a number and returns true if the number is zero, and false otherwise.
// 1.  0 - тэй тэнцүү бол true, үгүй бол false гэж хэвэлдэг isZero гэдэг функц бичнэ үү.
function isZero(zero1) {
  if (zero1 == 0) {
    console.log("1.", true);
  } else {
    console.log("1.", false);
  }
}

isZero(2);

// 2. Square a Number: Write a function square that takes a number and returns its square.
// 2. Тооны квадрат: Тоо өгч квадратыг нь буцаадаг square гэдэг функц бичнэ үү.
function squarea(kavdrat) {
  console.log("2.", kavdrat * kavdrat);
}

squarea(5);

// 3. Calculate the Area of a Rectangle: Write a function rectangleArea that takes the width and height of a rectangle and returns its area.
// 3. Тэгш өнцөгтийн талбайг тооцоолох: Тэгш өнцөгтийн өргөн ба өндрийг өгч талбайг нь буцаадаг rectangleArea гэдэг функц бичнэ үү.
function rectangleArea(ondor, orgon) {
  return ondor * orgon;
}

// const sum2 = rectangleArea(4, 4);

console.log("3.", rectangleArea(4, 4));

// 4. Find the Largest Number: Write a function findLargest that takes three numbers as arguments and returns the largest number.
// 4. Хамгийн их тоог ол: Гурван тоо өгч хамгийн их тоог буцаадаг findLarge гэдэг функц бичнэ үү.
function findLarge(too1, too2, too3) {
  if (too1 > too2 && too1 > too3) {
    return too1;
  } else if (too2 > too1 && too2 > too3) {
    return too2;
  } else {
    return too3;
  }
}
console.log("4.", findLarge(3, 3, 5));
// 5. Convert Temperature: Write a function celsiusToFahrenheit that takes a temperature in Celsius and returns the temperature in Fahrenheit
// 5. Температур хөрвүүлэх: Цельсийн температур өгч Фаренгейтийн температурыг буцаадаг celsiusToFahrenheit гэдэг функц бичнэ үү.
function celsiusToFahrenheit(tsels) {
  return 1.8 * tsels + 32;
}

// const sum1 = celsiusToFahrenheit(3);

console.log("5.", celsiusToFahrenheit(3));

// 6. Simple Calculator: Write a function calculator that takes three arguments: two numbers and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). The function should perform the corresponding operation and return the result.
// 6. Энгийн тооны машин: Хоёр тоо болон ямар үйлдэл хийх утга ('add', 'subtract', 'multiply', 'divide') гэсэн гурван аргумент авах функц бичнэ үү. Энэ Функц нь харгалзах үйлдлийг гүйцэтгэж, үр дүнг буцаадаг байна.
function arguments(num1, num2, operation) {
  if (operation == "add") {
    return num1 + num2;
  } else if (operation == "subtract") {
    return num1 - num2;
  } else if (operation == "multiply") {
    return num1 * num2;
  } else if (operation == "divide") {
    return num1 / num2;
  }
}

// const x = arguments(5, 5, "add");

console.log("6.", arguments(5, 5, "divide"));
