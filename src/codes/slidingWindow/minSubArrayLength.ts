// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.
// eg: minSubArrayLen([2,3,1,2,4,3], 7) => 2 because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) => 2 because [5,4] is the smallest subarray

const minSubArrayLen = (arr: number[], n: number): number => {
  const arrLength = arr.length;
  let start = 0;
  let end = 0;
  let minLength = 0;
  let sum = 0;

  while (start < arrLength) {
    if (sum < n && end < arrLength) {
      sum += arr[end];
      end++;
    } else if (sum >= n) {
      if (start === end) {
        return 1;
      }
      minLength = minLength ? Math.min(minLength, end - start) : end - start;
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLength;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 100)); // 0
console.log(minSubArrayLen([2, 1, 6, 5, 4], 3)); // 1
