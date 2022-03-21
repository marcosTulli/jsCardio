// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  const checkForPrime = (i) => {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      console.log(i);
      total += i;
    }
  }
  //   return total;
}

// Call Function
const output = sumAllPrimes(10);

console.log(output);

// function sumAllPrimes(num) {
//   let total = 0;

//   const checkForPrime = (i) => {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     // console.log(i);
//     return true;
//   };

//   for (let i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }

// // Call Function
// const output = sumAllPrimes(10);

// console.log(output);
