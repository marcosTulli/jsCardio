// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatString(str1) === formatString(str2);
}
// Helper Function
function formatString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// Call Function
const output = isAnagram("tijeras", "serjita ");

console.log(output);
