// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// 1 2 3
// 4 5 6
// 9 8 9

// 1 + 5 + 9 = 15
// 3 + 5 +9  = 17

// ABS is 2

function diagonal(arr) {
  let left = 0;
  let right = 0;
  for (let i in arr) {
    left += arr[i][i];
    right += arr[i][arr.length - 1 - i];
  }
  const value = Math.abs(left - right);
  return value;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log(diagonal(matrix));

// function diagonal(arr) {
//   const left = [arr[0][0], arr[1][1], arr[2][2]];
//   const right = [arr[2][0], arr[1][1], arr[0][2]];
//   const sum = (newArr) => {
//     return newArr.reduce((a, b) => a + b);
//   };
//   const absolute = Math.abs(sum(left) - sum(right));

//   return absolute;
// }

// let matrix = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 9, -12],
// ];
// console.log(diagonal(matrix));
