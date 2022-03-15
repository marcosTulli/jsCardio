// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const reverse = int.toString().split("").reverse().join("");
  return parseInt(reverse) * Math.sign(int);
}

// Call Function
const output = reverseInt(123);

console.log(output);
