// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    debugger;
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(" ");
  //
  // SOLUTION 2 MAP
  //
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word) => word[0].toUpperCase() + word.substr(1))
  //   .join(" ");
  //
  // SULTION 3 REGEX
  //   return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
  //
  //
}

// Call Function
const output = capitalizeLetters("i love javaScRipt");

console.log(output);
