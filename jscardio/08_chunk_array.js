// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // //   SOULTION 1
  //   // Call Function
  //   // Init chunked arr
  //   const chunkedArr = [];
  //   // Set Index
  //   let i = 0;
  //   // Loop while index is less than array length
  //   while (i < arr.length) {
  //     // Slice ouyt from the index to the index + the chunk length and push on to the chunked array
  //     chunkedArr.push(arr.slice(i, i + len));
  //     // Increment by chunk length
  //     i += len;
  //   }
  //   return chunkedArr;
  //
  //
  //      SOLUTION 2
  //
  // const chunkedArr = [];
  // arr.forEach((val) => {
  //   const last = chunkedArr[chunkedArr.length - 1];
  //   if (!last || last.length === len) {
  //     chunkedArr.push([val]);
  //   } else {
  //     last.push(val);
  //   }
  // });
  // return chunkedArr;
}

const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 4);
console.log(output);
