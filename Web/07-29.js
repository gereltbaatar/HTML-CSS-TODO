function pushArray(array, element) {
  const newArray = array;
  newArray[newArray.length] = element;
  return newArray;
}

// console.log(pushArray([1, 2, 3], 6));

// 07-26 odor bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

// function popArray(array) {
//   array.length = array.length - 1;
//   return array;
// }

// console.log(popArray([1, 2, 3, 4]));

// 07-26 odor bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

// function shiftArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i + 1];
//   }
//   array.length = array.length - 1;
//   return array;
// }

// // console.log(shiftArray([2, 3, 5]));

// 07-26 odor bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

// function unshiftArray(array, element) {
//   let newArray = [];
//   newArray[0] = element;
//   for (let i = 0; i < array.length; i++) {
//     newArray[i + 1] = array[i];
//   }
//   return newArray;
// }

// console.log(unshiftArray([2, 1, 5], 22));

// 07-26 odor bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

// const array = [2, 1, 4, 5];
// let newArray = [];
// let element = 0;
// function pushArray(array, element) {
//   for (i = 0; i < array.length; i++) {
//     element = array[i] * 2;
//     console.log(element);
//   }
//   const newArray = array;
//   newArray[newArray.length] = element;
//   console.log(newArray);
// }

// const array = [2, 1, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] * 2;
// }
// console.log(array);

// 07-26 odor bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

// function unshiftArray(array, element) {
//   let newArray = [];
//   newArray[0] = element * 2;
//   for (let i = 0; i < array.length; i++) {
//     newArray[i + 1] = array[i];
//   }
//   return newArray;
// }

// console.log(unshiftArray([2, 1, 5], 22));

// 07-26 odor bodlogo-1 (for) (if) [array] -------------------------------------------------------------------------------

const array = [2, 1, 4, 5];

function ailter(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 3) {
        function pushArray(newArray, array[i]);
    //   console.log(array[i]);
    }
  }
}
