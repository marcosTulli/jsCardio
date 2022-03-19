// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
  //  Create filtered Array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //  Sort By Lenght
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  //  If multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  if (longestWordArr.length === 1) {
    return longestWord[0];
  } else {
    return longestWordArr;
  }
}

// Call Function
const output = longestWord("hola gente, me llamo  estebanestevanez");

console.log(output);
