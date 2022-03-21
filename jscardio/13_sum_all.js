// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// ES5 SOLUTION
// function addAll() {
//
//
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
//
// }
//
//  SOLUTION 2
//

function addAll(...nums) {
  //   let total = 0;
  //   nums.forEach((num) => (total += num));
  //   return total;

  //  SOLUTION 3

  return nums.reduce((a, b) => a + b);
}
// Call Function
const output = addAll(2, 5, 6, 7, 12);

console.log(output);
