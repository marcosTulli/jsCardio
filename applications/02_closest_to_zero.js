// You have been given an interger array A of size N. You need to print the number with the value
// closest to Zero. If there are multiple elemnents, print the number with the greater value.
// Input format:
//  - First Line: An interger N denoting the size of the array A
//  - Next Line: N space-separated intergers denoting the elements of the array A
//
//  Constraints:
// 1 < N <= 100
// 1 <= A(i) <= 100 where |A(i)| denotes the absolute value of A(i)
//

function main(input) {
  // Input must be greater than 1 less or equal to 100
  if (input < 1 || input > 100) {
    console.log("Sorry, input must be larger than 1 and smaller than 100");
  } else {
    // Create a random array of lenght of input value
    let array = [...new Array(input)].map(
      () => Math.round(Math.random() * 201) - 100
    );
    // Return closest to zero
    const closest = array.reduce((a, b) => {
      return Math.abs(b - 0) < Math.abs(a - 0) ? b : a;
    });

    console.log(array.join(" "));
    console.log(closest);
  }
}
main(30);
