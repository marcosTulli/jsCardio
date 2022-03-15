// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

// Call Function
const output = isPalindrome("menem");

console.log(output);
