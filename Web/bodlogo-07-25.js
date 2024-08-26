// bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

// let x = 0;
// const array = [2, -3, 5, 6, -8, 10];
// for (i = 0; i < array.length; i++) {
//   if (array[i] >= 0 && array[i] % 2 == 0) {
//     x += array[i];
//   }
// }

// console.log(`1. Even positive niilber ni - ${x}`);

// secondLarge (for) (if) [array] -------------------------------------------------------------------------------

// {
//   const array = [1, 100, 10, 1000];
//   let max = 0;
//   let second = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//       for (let g = 0; g < array.length; g++) {
//         if (max > array[g] && second < array[g]) {
//           second = array[g];
//         }
//       }
//     }
//   }
//   console.log(`2. Array hamgiin ih utag ni - ${second}`);
// }

// secondLarge (for) (if) [array] -------------------------------------------------------------------------------

//   }

// bodlogo-3 (for) (if) [array] -------------------------------------------------------------------------------

// {
//   let y = 0;
//   let x = 0;
//   const array = [10, 20, 30, 40, 50];
//   for (i = 0; i < array.length; i++) {
//     x += array[i];
//     y = x / array.length;
//   }
//   console.log(`3. Array dah toonii dundag ni - ${y}`);
// }

// bodlogo-4 (for) (if) [array] -------------------------------------------------------------------------------

// {
//   const array = [1, 3, 5, 22, 89, 46, 17, 31];
//   let max = 0;
//   let min = array[0];
//   for (i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     } else if (min > array[i]) {
//       min = array[i];
//     }
//   }
//   console.log(`Array hamgiin max - ${max}, hamgiin min - ${min}`);
// }

// bodlogo-5 (for) (if) [array] -------------------------------------------------------------------------------

// {
//   let sum = 0;
//   let number = 4;
//   for (let i = 0; i <= number; i++) {
//     sum = sum + i;
//   }
//   console.log(`Bagtral 4! ni - ${sum}`);
// }

// bodlogo-6 (for) (if) [array] -------------------------------------------------------------------------------

// {
//   let number = 6;
//   for (let i = 0; i < Infinity; i++) {
//     if (number ** i > 1000) {
//       console.log(`Toonii zereg ni - ${i}`);
//       break;
//     }
//   }
// }

// zereg oloh bol )**)

// bodlogo-7 (for) (if) [array] -------------------------------------------------------------------------------

// {
//   const array = [5, 4, 3, 2, 1];
//   let sum = 0;
//   let max = 0;
//   let min = array[0];
//   for (i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     }
//     console.log(max);
//   }
// }

// 07-26 odor bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

// {
//   const array = [1, 2, 3];
//   const array1 = [4, 5, 6];

//   const result = [...array, ...array1];

//   console.log(result);
// }

// {
//   let array = [1, 2, 3];
//   let array1 = [4, 5, 6];

//   const array2 = array.concat(array1);

//   console.log(array2);
// }

// 07-26 odor bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

// {
//   const array = [1, 2, 3];
//   const array1 = [4, 5, 6];
//   const result = [];

//   result.length = array.length + array1.length;
//   for (i = 0; i < result.length; i++) {
//     result[i] = array[i];
//     if (i >= array.length) {
//       result[i] = array1[i - array.length];
//     }
//   }
//   console.log(result);
// }

// 07-26 odor bodlogo-1 (for) (if) [array] (reverse) -------------------------------------------------------------------------------

// {
//   let are1 = [5, 4, 3, 2, 1];

//   let reverseArray = [];

//   let endex = 0;
//   for (i = are1.length - 1; i >= 0; i--) {
//     reverseArray[endex] = are1[i];
//     endex++;
//   }
//   console.log(reverseArray);
// }

// 07-26 odor bodlogo-2 (for) (if) [array] (reverse) -------------------------------------------------------------------------------

// {
//   const array = [10, 20, 30, 40];
//   let x = 50;

//   for (i = 0; i < array.length; i++) {
//     if (array[i] == x) {
//     }
//   }
// }

// // 07-26 odor bodlogo-2 (for) (if) [array] (reverse) -------------------------------------------------------------------------------

// {
//   const array = [1, 7, 9, 3, 13];
//   let x = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (array[i] < array[j]) {
//         debugger;
//         let x = array[i];
//         array[i] = array[j];
//         array[j] = x;
//       }
//     }
//   }
//   console.log(array);
// }
