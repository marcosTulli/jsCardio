// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let character = str.charCodeAt(0);
  let missing;
  str.split("").map((char, i) => {
    if (str.charCodeAt(i) === character) {
      ++character;
    } else {
      missing = String.fromCharCode(character);
    }
  });
  return missing;
}
// Call Function
const output = missingLetters("abcdefgi");

console.log(output);
