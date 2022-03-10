// Given an aray of intergers, return the result of substracting the values of the odd indexes from the even indexes
// Index 0  is even

// EX: [1,2,3] = 2   /  Index 0 = 1, index 1 = 2, index 2 = 3   4 - 2 = 2

function findTotal(my_list) {
  let odd = [];
  let even = [];
  for (let i in my_list) {
    if ([i] % 2 === 0) {
      even.push(my_list[i]);
    } else {
      odd.push(my_list[i]);
    }
  }
  let oddSum = odd.reduce((a, b) => a + b);
  let evenSum = even.reduce((a, b) => a + b);
  let result = evenSum - oddSum;

  return { result, oddSum, evenSum };
}

let array = [80, 30, 30];
console.log(findTotal(array));
// FIX WHEN NO ODDS THROWS ERROR

// function findTotal(my_list) {
//   const isEven = (n) => n % 2 === 0;
//   const isOdd = (n) => !isEven(n);
//   const sum = (a, b) => a + b;
//   const oddSum = my_list.filter(isOdd).reduce(sum);
//   const evenSum = my_list.filter(isEven).reduce(sum);
//   return oddSum - evenSum;
// }

// findTotal(array);
