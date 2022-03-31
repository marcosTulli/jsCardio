let array = [1, 3, 6, 4, 1, 2, -1, -4];

const solution = (A) =>
  Array.from(Array(A.length))
    .map((_, i) => i)
    .find((n) => n > 0 && !A.includes(n));

function solution(A) {
  let newArray = [...new Set(A)].sort((a, b) => a - b);

  for (let i in newArray) {
    let currentValue = newArray[i];
    let nextValue = newArray[Number(i) + 1];
    if (nextValue - currentValue !== 1 && currentValue > 0) {
      return currentValue + 1;
    }
  }
}

(() => {
  const arr1 = [1, 2, 6, 9, 2];
  const expectedReturn1 = 3;
  const result1 = solution(arr1);
  if (result1 !== expectedReturn1) {
    throw new Error(
      `Input: ${arr1} | Expected: ${expectedReturn1} | Got: ${result1}`
    );
  } else {
    console.log("OK 1");
  }

  const arr2 = [2, 6, 9, 2];
  const expectedReturn2 = 1;
  const result2 = solution(arr1);
  if (result2 !== expectedReturn1) {
    throw new Error(
      `Input: ${arr2} | Expected: ${expectedReturn2} | Got: ${result2}`
    );
  } else {
    console.log("OK 2");
  }

  const arr3 = [-3, -9, 2, 6, 9, 2];
  const expectedReturn3 = 1;
  const result3 = solution(arr1);
  if (result3 !== expectedReturn1) {
    throw new Error(
      `Input: ${arr3} | Expected: ${expectedReturn3} | Got: ${result3}`
    );
  } else {
    console.log("OK 3");
  }
})();
