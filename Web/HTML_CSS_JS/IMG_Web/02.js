// easy
// 1.Check if given number is positive, negative, or zero .
// Өгөгдсөн тоо эерэг бол "positive" , сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү . console.log("the number is positive")
{
  let x = 2;
  if (x > 0) {
    console.log("1.", "POSITIVE");
  } else if (x < 0) {
    console.log("1.", "NEGATIVE");
  } else if (x == 0) {
    console.log("1.", "ZERO");
  }
}

// 2.Check age for driving.
// Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү .
{
  let x = 18;
  c = 18 - x;
  if (x >= 18) {
    console.log("2.", "You are old enough to drive");
  } else if (x < 18) {
    console.log("2.", `You are left with ${c} years to drive`);
  }
}
// 3.Check if the given number is odd or even .
// Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .
{
  let x = 24;
  c = x % 2;
  if (c == 0) {
    console.log("3.", "even");
  } else if (c == 1) {
    console.log("3.", "odd");
  }
}
// 4.Check if a given number is divisible by 5 .
// Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.
{
  let x = 25;
  c = x % 5;
  if (c == 0) {
    console.log("4.", "huvaagdana");
  } else if (c == c > 0) {
    console.log("4.", "huvaagdahgu");
  }
}
// 5.Check if a given number is within the range of 1 to 100 .
// Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .
{
  let x = 100;
  if (1 <= x && x <= 100) {
    console.log("5.", "include");
  } else {
    console.log("5.", "exclude");
  }
}
// 6.Check if a password is strong (strong password is at least 8 characters long) .
// Нууц үгийг хүчтэй үгүйг шалгаад хүчтэй бол "strong", сул бол "weak" гэж хэвлэнэ үү. Багадаа 8 тэмдэгт агуулвал хүчтэй гэж тооцно .
{
  let pass = "12345678";
  if (pass.length >= 8) {
    console.log("6.", "Strong");
  } else {
    console.log("6.", "Week");
  }
}
// medium
// 7.Categorize age group (children, youth, adults, seniors) .
// Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth", 24-64 бол "Adults", 64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .
{
  let x = 18;
  if (0 <= x && x < 14) {
    console.log("7.", "Children");
  } else if (14 <= x && x < 24) {
    console.log("7.", "Youth");
  } else if (24 <= x && x < 64) {
    console.log("7.", "Adults");
  } else if (64 <= x) {
    console.log("7.", "Seniors");
  }
}
// 8.Check triangle validity .
// Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
// Жишээ нь:
//      a=5 b=6 c=7 / is valid
//      a=4 b=8 c=19 / is invalid
{
  let a = 5;
  let b = 6;
  let c = 7;
  if (a == 5 && b == 6 && c == 7) {
    console.log("8.", "is valid");
  } else {
    console.log("8.", "is invalid");
  }
}

// 9.Find the largest of two number .
// 2 тооноос ихийг нь олж хэвлэнэ үү .
{
  let x = 3;
  let y = 5;

  if (x > y) {
    console.log("9.", `эдгээр тооны их нь ${x} байна`);
  } else if (x < y) {
    console.log("9.", `эдгээр тооны их нь ${y} байна`);
  } else if (x == y) {
    console.log("9.", "тэнцүү байна");
  }
}
// 10.Check if a given character is a vowel or a consonant .
// Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .
{
  let char = "g";
  if (
    char == "a" ||
    char == "e" ||
    char == "y" ||
    char == "u" ||
    char == "i" ||
    char == "o"
  ) {
    console.log("10. Vowel");
  } else {
    console.log("10. consonant");
  }
}
// 11.Check if year is an Olympic year.
// Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .
{
  let x = 2024;
  d = x - 1896;
  c = d % 4;
  b = 4 - c;
  if (c == 0) {
    console.log("11.", "Олимпийн жил мөн");
  } else {
    console.log("11.", `Олимп болоход  ${b} жил дутуу байна.`);
  }
}

// 12.Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай.
// Өгөгдсөн өдөр ажлын өдөр бол "work day" , амралтын өдөр бол "weekend" гэж хэвлэнэ үү .
// for example :
//      day = Thursday / work day
//      day = Saturday / weekend
{
  let day = 5;
  if (day == 1) {
    console.log("12.", "monday", "work day");
  } else if (day == 2) {
    console.log("12.", "tuesday", "work day");
  } else if (day == 3) {
    console.log("12.", "wednesday", "work day");
  } else if (day == 4) {
    console.log("12.", "thursday", "work day");
  } else if (day == 5) {
    console.log("12.", "friday", "work day");
  } else if (day == 6) {
    console.log("12.", "saturday", "weekend");
  } else if (day == 7) {
    console.log("12.", "sunday", "weekend");
  }
}
// 13.Check if the given number is a prime number or not .
// Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example :
// number = 2 // true
// number = 15 // false
{
  let x = 18;
  if (x % 2 !== 0 && x % 3 !== 0) {
    console.log("13.", `${x} анхны тоо мөн`);
  } else if (x == 2 || x == 3) {
    console.log("13.", `${x} анхны тоо мөн`);
  } else {
    console.log("13.", `${x} анхны тоо биш`);
  }
}

// 14.Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .
//    80-100, A
//    70-89, B
//    60-69, C
//    50-59, D
//    0-49, F

{
  let x = 89;
  if (0 <= x && x <= 49) {
    console.log("14.", "сурагчийн дүн - F");
  } else if (50 <= x && x <= 59) {
    console.log("14.", "сурагчийн дүн - D");
  } else if (60 <= x && x <= 69) {
    console.log("14.", "сурагчийн дүн - C");
  } else if (70 <= x && x <= 79) {
    console.log("14.", "сурагчийн дүн - B");
  } else if (80 <= x && x <= 100) {
    console.log("14.", "сурагчийн дүн - A");
  }
}

//hard
// 15.Check if the season is Autumn, Winter, Spring or Summer.
// Өгөгдсөн сарыг шалгаад тохирох улирлыг хэвлэнэ үү .
// for example : month = November / Autumn
{
  let x = 7;
  if (x == 1) {
    console.log("15.", "january / Winter");
  } else if (x == 2) {
    console.log("15.", "February / Winter");
  } else if (x == 3) {
    console.log("15.", "March / Spring");
  } else if (x == 4) {
    console.log("15.", "April / Spring");
  } else if (x == 5) {
    console.log("15.", "May / Spring");
  } else if (x == 6) {
    console.log("15.", "June / Summar");
  } else if (x == 7) {
    console.log("15.", "Jule / Summar");
  } else if (x == 8) {
    console.log("15.", "August / Summar");
  } else if (x == 9) {
    console.log("15.", "September / Autumn");
  } else if (x == 10) {
    console.log("15.", "October / Autumn");
  } else if (x == 11) {
    console.log("15.", "Nnovember / Autumn");
  } else if (x == 12) {
    console.log("15.", "December / Winter");
  } else {
    console.log("15.", "not month");
  }
}

// 16.Яг одоогийн цагийг шалган өглөө бол "Good morning", өдөр бол "Good afternoon", орой бол "Good evening" гэж хэвлэнэ үү .
{
  let x = 31;
  if (5 <= x && x < 10) {
    console.log("16.", "Good morning");
  } else if (10 <= x && x < 16) {
    console.log("16.", "Good afternoon");
  } else if (16 <= x && x < 20) {
    console.log("16.", "Good evening");
  } else if (20 <= x && x < 5) {
    console.log("16.", "Good night");
  } else {
    console.log("16.", "Not time");
  }
}

// 17.Цаг агаар температур , "sunny" эсвэл "rainy" гэж өгөгдөх ба бороотой бол "Don't forget your umbrella!" , нартай бол температур нь 30-аас их бол "It's a hot day!" , 20-30 градус бол "It's a warm day" , 20-оос бага бол "It's a bit cool today" гэж хэвлэнэ үү .
// for example : weather = "sunny" temperature = 25 / It's a warm day.
{
  let weather = "rainy";
  let temperature = 13;
  if (weather == "rainy") {
    console.log("17.", "Don't forget your umbrella!");
  } else if (weather == "sunny" && temperature > 30) {
    console.log("17.", "It's a hot day!");
  } else if (weather == "sunny" && temperature < 20) {
    console.log("17.", "It's a bit cool today");
  } else if (weather == "sunny" || (temperature >= 20 && temperature <= 30)) {
    console.log("17.", "It's a warm day");
  }
}
