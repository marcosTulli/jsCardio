// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...rest) {
  //   SOLUTION 1
  //   const args = Array.from(arguments);
  //   const filterArr = (arr) => {
  //     return args.indexOf(arr) === -1;
  //   };
  //   return arr.filter(filterArr);

  //  SOLUTION 2
  return arr.filter((val) => !rest.includes(val));
}

// Call Function
const output = seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6, "hello");

console.log(output);
