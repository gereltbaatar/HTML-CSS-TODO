// carName гэсэн хувьсагч зарлаад Volvo гэсэн утга онооно уу .
let carName = "Volvo";
console.log(carName);

// name гэсэн хувьсагч зарлаад өөрийнхөө нэрийг онооно уу .
let name = "Gereltbaatar";
console.log(name);

// futureJob гэсэн хувьсагчийг утга оноохгүйгээр зарлана уу .
let futureJob;
console.log(futureJob);

// 'age' гэсэн хувьсагч зарлаад өөрийн насыг онооно уу .
let age = 18;
console.log(age);

// PI гэсэн тогтмол утга зарлаад 3.14 гэсэн утга онооно уу .
const PI = 3.14;
console.log(PI);

// x ба y гэсэн хоёр хувьсагчийг ашиглан 5 + 10-ын нийлбэрийг харуулна уу .
let x = 5;
let y = 10;
console.log(x + y);

// Declare three variables for each let , const.
// for example : const motherName = 'Chimgee' ; let presidentName = 'Khurelsukh'
// let , const тус бүрт нь 3 хувьсагч зарлана уу .

const motherName = "Puujee";
let presidentName = "gereltbaatar";

console.log(motherName, presidentName);

// Declare a variable 'city' and assign it a city name, then reassign it to another city.
// city гэсэн хувьсагч зарлаад хотын нэр онооно уу , дараа нь ахин өөр хотын нэр онооно уу .

let city = "ulaanbaatar ";
console.log(city);
city = "uliastai";

console.log(city);

// Declare variables 'firstName' and 'lastName', then concatenate them into a variable 'fullName'.
// firstName , lastName гэсэн хувьсагчууд зарлаад , дараа нь нэгтгэн fullName гэсэн хувьсагчид онооно уу .
let firstName = "Mygmar";

let lastName = "Gereltbaatar";

let fullName = firstName + lastName;

console.log(fullName);

// Declare a string value.
// String утга зарлана уу .
string = "hhhhh";
console.log(string);

// Declare a number value.
// Number утга зарлана уу .\
number = 12;
console.log(number);

// Declare an undefined value.
// Undefined утга зарлана уу .
hiro = undefined;

alert("hi bro");

// {
//   let x = prompt("X - too oruulna uu");
//   let y = prompt("Y - too oruulna uu");
//   d = x / y;
//   console.log(d);
// }
// 1. 4 нь 3-аас их үү ?
{
  let x = 4;
  let y = 3;

  console.log("1. 4 нь 3-аас их үү ?", x > y);
}
// 2. 3 нь 4-өөс их үү ?
{
  let x = 3;
  let y = 4;
  12;

  console.log("2. 3 нь 4-өөс их үү ?", x > y);
}
// 3. 4 нь 3-аас их буюу тэнцүү юу ?
{
  let x = 4;
  let y = 3;

  console.log("3. 4 нь 3-аас их буюу тэнцүү юу ?", x >= y);
}
// 4. 3 нь 4-өөс их буюу тэнцүү юу ?
{
  let x = 3;
  let y = 4;

  console.log("4. 3 нь 4-өөс их буюу тэнцүү юу ?", x >= y);
}
// 5. 4 нь 4-тэй тэнцүү юу ?
{
  let x = 4;
  let y = 4;

  console.log("5. 4 нь 4-тэй тэнцүү юу ?", x == y);
}
// 6. 4 нь 4-тэй яг тэнцүү юу ?
{
  let x = 4;
  let y = 4;

  console.log("6. 4 нь 4-тэй яг тэнцүү юу ?", x === y);
}
// 7. 4 нь 4-тэй тэнцүү биш нь үнэн үү ?
{
  let x = 4;
  let y = 4;

  console.log("7. 4 нь 4-тэй тэнцүү биш нь үнэн үү ?", x !== y);
}
// 8. 4 нь "4"-тэй тэнцүү биш нь үнэн үү ?
{
  let x = 4;
  let y = "4";

  console.log("8. 4 нь 4-тэй тэнцүү биш нь үнэн үү ?", x != y);
}

// 9. 4 нь "4"-тэй яг тэнцүү юу ?
{
  let x = 4;
  let y = "4";

  console.log("9. 4 нь 4-тэй яг тэнцүү юу ?", x === y);
}
// 10. 4 нь "4"-тэй тэнцүү юу ?
{
  let x = 4;
  let y = "4";

  console.log("10. 4 нь 4-тэй тэнцүү юу ?", x == y);
}
// 11. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ?
{
  let x = 4;
  let y = 3;
  let z = 10;
  let a = 12;
  console.log(
    "11. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ?",
    x > y && z < a
  );
}
// 12. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ?
{
  let x = 4;
  let y = 3;
  let z = 10;
  let a = 12;
  console.log(
    "12. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ?",
    x > y && z > a
  );
}
// 13. 4 нь 3-аас их эсвэл 10 нь 12-оос бага нь үнэн үү ?
{
  let x = 4;
  let y = 3;
  let z = 10;
  let a = 12;

  console.log(
    "3. 4 нь 3-аас их эсвэл 10 нь 12-оос бага нь үнэн үү ?",
    x > y && z < a
  );
}
// 14. 4 нь 3-аас их эсвэл 10 нь 12-оос их нь үнэн үү ?
{
  let x = 4;
  let y = 3;
  let z = 10;
  let a = 12;

  console.log(
    "14. 4 нь 3-аас их эсвэл 10 нь 12-оос их нь үнэн үү ?",
    x > y && z > a
  );
}
// 15. 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ?
{
  let x = 4;
  let y = 3;
  let z = 10;
  let a = 12;

  console.log(
    " 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ?",
    x < y && z > a
  );
}
// 16. let five = !(4 > 3) ямар хариу буцаах вэ ?
{
  let five = !(4 > 3);
  console.log("16. let five = !(4 > 3) ямар хариу буцаах вэ ?", five);
}
// 17. let six = !(4 < 3) ямар хариу буцаах вэ ?
{
  let five = !(4 < 3);
  console.log("7. let six = !(4 < 3) ямар хариу буцаах вэ ?", five);
}
// 18. let seven = !(4 > 3 && 10 < 12) ямар хариу буцаах вэ ?
let seven = !(4 > 3 && 10 < 12);

console.log(
  "18. let seven = !(4 > 3 && 10 < 12) ямар хариу буцаах вэ ?",
  seven
);
// 19. let eight = !(4 > 3 && 10 > 12) ямар хариу буцаах вэ ?
let eight = !(4 > 3 && 10 > 12);

console.log(
  "19. let eight = !(4 > 3 && 10 > 12) ямар хариу буцаах вэ ?",
  eight
);
// 20. let nine = !(4 === "4") ямар хариу буцаах вэ ?
let nine = !(4 === "4");

console.log("20. let nine = !(4 === 4) ямар хариу буцаах вэ ?", nine);
// 21. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү .
{
  let x = 936;
  let y = 12;

  let d = x / y;

  let c = d % 9;

  console.log(
    "1. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү .",
    c
  );
}

console.log("NOHTSOL");
