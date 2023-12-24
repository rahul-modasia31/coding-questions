// write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
//eg: [-3,-2,-1,0,1,2,3] => [-3,3]
// [-2,0,1,3] => null

const sumZero = (arr: number[]): number[] | null => {
  let leftPtr = 0;
  let rightPtr = arr.length - 1;

  while (leftPtr < rightPtr) {
    const sum = arr[leftPtr] + arr[rightPtr];
    if (sum === 0) {
      return [arr[leftPtr], arr[rightPtr]];
    }
    if (sum > 0) {
      rightPtr--;
    } else {
      leftPtr++;
    }
  }
  return null;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
