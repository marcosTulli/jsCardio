// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // SOLUTION 1    Reverse
  // return str.split("").reverse().join("");
  //
  // SOLUTION 2    For loop
  // let revString = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;
  //
  // SOLUTION 3  For of loop
  // let revString = "";
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;
  //
  // SOLUTION 4 For Each Loop
  // let revString = "";
  // str.split("").forEach((char) => (revString = char + revString));
  // return revString;
  //
  // SOLUTION 5  Reduce
  // return str.split("").reduce((a, b) => b + a, "");
}

// Call Function
const output = reverseString("hello");

console.log(output);
