// const person = {
//   name: "gerelt",
//   age: 18,
// };

// console.log(person.age);

// const array = [{ name: "bro" }, { name: "me" }];

// console.log("1.", array[0]);
// console.log("1.", array[0].name);
// console.log("1.", array[1]);
// console.log("1.", array[1].name);

// const array = ["hi me ", "hell", 3];

// console.log(array[0], array[2], array[1]);

// const person = {
//   name: undefined,
//   age: 10,
//   firstName: "LEAP",
// };

// const array = ["hello", person];

// console.log(array[0]);

// console.log(person.firstName);

//daalgavar-1  -------------------------------------------------------------------------------

// const person = {
//   classinfo: {
//     classnumber: 401,
//     teacherName: ["bolroo", "dashkaa", "duiuu"],
//     imacNumber: "5b",
//   },
//   name: "gereltbaatar",
// };

// console.log(
//   "teacher Name - >",
//   person.classinfo.teacherName[0],
//   person.classinfo.teacherName[1],
//   person.classinfo.teacherName[2]
// );
// console.log("mini ner - >", person.name);
// console.log("Class Number - >", person.classinfo.classnumber);
// console.log("imac number - >", person.classinfo.imacNumber);

//Daalgavar-2 -------------------------------------------------------------------------------

// Array -n 2dah elementiig hevelne uu
// const array4 = [10, 20, 30, 40, 50];

// console.log(array4[1]);

// // object dotor baigaa array-g hevelne uu
// const person3 = { name: "Alice", friends: ["Bob", "Charlie"] };

// console.log(person3.friends[0], person3.friends[1]);

// // New York iig songoj hevlene uu
// const person2 = { name: "Alice", address: { city: "New York", zip: 10001 } };

// console.log(person2.address.city);

// // 2D array -s 6 toog songoj hevelne uu
// const array2D = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(array2D[1][2]);

// Nohtsol (for) -------------------------------------------------------------------------------

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let sum = 0;
// for (let index = 0; index <= 5; index++) {
//   sum += index;
// }

// console.log(sum);

// for (let i = 0; i <= 5; i++) {
//   debugger;
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// const array = ["BMW", "BENZ", "SUPRA", "GTR", "FORD"];

// for (i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// const array = ["BMW", "BENZ", "SUPRA", "GTR", "FORD"];

// for (i = 0; i <= array.length - 1; i++) {
//   console.log(array[i]);
// }

//Daalgavar-3-(for) -------------------------------------------------------------------------------

// 1. Console numbers from 1 to 10 .
// 1 -> 10 хүртэлх тоог хэвлэнэ үү .
// for example :  1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// for (let i = 1; i <= 10; i++) {
//   console.log("1.", i);
// }

// 2. Console numbers from 10 to 1 .
// 10 -> 1 хүртэлх тоог хэвлэнэ үү
// for example :  10, 9, 8, 7, 6 ... 1

// for (let i = 10; i >= 1; i--) {
//   console.log("2.", i);
// }

// 3. Sum of Numbers. Write a for loop that calculates the sum of numbers from 1 to 10.
// 1-10 хүртэлх тооний нийлбэрийг олно уу.

// let sum1 = 0;
// for (let i = 1; i <= 10; i++) {
//   sum1 += i;
// }
// console.log("3.", sum1);

// 4. Console sum of even numbers 1 to 20 .
// 1 -> 20 хоорондох тэгш тоонуудын нийлбэрийг хэвлэнэ үү .

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 1) {
//     a = i + i;
//   }
// }
// console.log("4.", a);

// 5. Console a square of stars (*) .
// (*) Од ашиглан дөрвөлжинг хэвлэнэ үү .
// for example :
// *****
// *****
// *****
// *****

// let array = ["****", "****", "****", "****"];
// for (i = 0; i < array.length; i++) {
//   console.log("5.", array[i]);
// }

// 6.
// (*) Од ашиглан доорх дүрсийг хэвлэнэ үү .
// for example :
// *
// **
// ***
// ****
// *****

// let array1 = ["*", "**", "***", "****", "*****"];
// for (i = 0; i <= array.length; i++) {
//   console.log("6.", array1[i]);
// }

// 7.Calculate given number to power .
// Өгөгдсөн тоог тухайн зэрэгт дэвшүүлнэ үү .
// input : number = 6  degree=10
// for example : 60466176
// {
//   const x = 6;
//   const y = 10;
//   let z = 1;
//   for (i = 1; i <= y; i++) {
//     z *= x;
//   }
//   console.log("7.", z);
// }

// 8.Calculate average of numbers from 12 to 36 .
// 12 -> 36 хүртэлх тоонуудын дунджийг ол .
// for example : 24
// {
//   let x = 0;
//   let y = 0;
//   for (i = 12; i < 36; i++) {
//     x += i;
//     y++;
//   }
//   console.log("8.", y);
// }

// 9.Sum of odd and even numbers from 11 to 50 .
// 11 -> 50 хүртэлх тоонуудын тэгш болон сондгой тоонуудын нийлбэрийг ол .
// for example : sumOdd = 600, sumEven = 620
// {
//   let sumOdd = 0;
//   let sumEven = 0;
//   for (let num = 11; num < 51; num++) {
//     if (num % 2 == 1) {
//       sumOdd += num;
//     } else {
//       sumEven += num;
//     }
//   }
//   console.log("9.", sumOdd);
//   console.log("9.", sumEven);
// }

// 10.Iterate through all numbers from 1 to 45. Print the following: For multiples of 3 print “Fizz” , For multiples of 5 print “Buzz” , For multiples of 3 and 5 print “FizzBuzz”
// 1 - 45 хүртэлх тоонуудын давталт гүйлгэж 3д хуваагдаж байвал “Fizz” , 5д хуваагдаж байвал “Buzz” , 3 болон 5д хуваагдаж байвал “FizzBuzz” гэж хэвлэнэ үү .
// for example : number = 6 // Fizz , number = 8 // empty , number = 15 // FizzBuzz
// {
//   x = "Fizz";
//   y = "Buzz";
//   z = "FizzBuzz";
//   s = "empty";
//   for (i = 1; i <= 45; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log(`10. number ${i} `, z);
//     } else if (i % 3 == 0) {
//       console.log(`10. number ${i} `, x);
//     } else if (i % 5 == 0) {
//       console.log(`10. number ${i} `, y);
//     } else {
//       console.log(`10. number ${i} `, s);
//     }
//   }
// }

// 11.Check the fifth power of given number is greater than 10000 .
// Тооны таван зэрэг нь 10000-аас дээш эсэхийг шалгана уу .
// for example :
//      5 * 5 * 5 * 5 * 5 = 3125 // it is less than 10000
//      8 * 8 * 8 * 8 * 8 = 32768 // it is greater than 10000
// {
//   const x = 8;
//   const y = 5;
//   let z = 1;
//   for (i = 1; i <= y; i++) {
//     if (z < 10000) {
//       console.log("11.", "it is less than 10000");
//     } else {
//       console.log("11.", "it is greater than 10000");
//     }
//     z *= x;
//   }
// }

// 12. Given an array of objects representing people with their ages, write a for loop to calculate the total age.
// Өгөгдсөн утгаас насны нийлбэрийг олно уу.
// {
//   const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "David", age: 40 },
//   ];

//   let x = 0;
//   for (i = 0; i < people.length; i++) {
//     x += people[i].age;
//   }

//   console.log("12.", x);
// }
// 13. Find Person by Name. Given an array of objects representing people, write a for loop to find a person by name.
// // Хүмүүсийг төлөөлж буй объектуудын array өгөгдсөн бол хүнийг нэрээр нь олохын тулд for давталт бичнэ үү.
// {
//   const people1 = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "David", age: 40 },
//   ];
//   a = "Bob";
//   let person;
//   for (i = 0; i < people1.length; i++) {
//     if (a == people1[i].name) {
//       person = people1[i];
//     }
//   }
//   console.log("13.", person);
// }

// 14. Calculate Average Price. Given an array of objects representing items, write a for loop to calculate the average price of the items.
// дундаж үнийг тооцоолно уу.
// {
//   const items = [
//     { name: "Book", price: 15 },
//     { name: "Pen", price: 2 },
//     { name: "Notebook", price: 5 },
//     { name: "Bag", price: 30 },
//   ];
//   let x = 0;
//   let y = 0;
//   for (i = 0; i < items.length; i++) {
//     x += items[i].price;
//     y = x / 4;
//   }
//   console.log("14.", y);
// }
