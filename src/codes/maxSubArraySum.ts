// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array and return the sum
// eg: [1,2,5,2,8,1,5], 2 => 10
// [1,2,5,2,8,1,5], 4 => 17
// [], 4 => 0

const maxSubArraySum = (arr: number[], n: number): number => {
  if (!arr.length) return 0;
  let leftPtr = 0;
  let rightPtr = leftPtr + n - 1;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = leftPtr; i <= rightPtr; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;

  for (let j = rightPtr + 1; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - n];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([], 4));
