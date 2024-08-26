// function pushArray(array, element) {
//   const newArray = element;
//   newArray[newArray.length] = element;
//   return newArray;
// }

// console.log(pushArray([1, 2, 3], 5));

// function shiftArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i + 1];
//   }
//   array.length = array.length - 1;
//   return array;
// }
// console.log(shiftArray([3, 4, 5]));

function UnshhiftArray(array, element) {
  for (let i = array.length; i >= 0; i--) {
    array[i] = array[i - element];
  }
  array;
  array.length = array.length + 1;
}
console.log(UnshhiftArray([1, 2, 3], 6));
