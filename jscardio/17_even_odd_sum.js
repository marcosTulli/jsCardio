// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(list) {
  let evens = 0;
  let odds = 0;
  list.forEach((num) => (num % 2 === 0 ? (evens += num) : (odds += num)));
  return [evens, odds];
}

// Call Function
const output = evenOddSums([50, 60, 60, 45, 71]);

console.log(output);
