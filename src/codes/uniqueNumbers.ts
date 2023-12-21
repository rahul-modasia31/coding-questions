// write a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
// eg. [1,1,1,1,1,2] => 2
// [1,2,3,4,4,4,7,7,12,12,13] => 7

const countUniqueValues = (arr: number[]): number => {
  if (!arr.length) return 0;
  let leftPtr = 0;
  let rightPtr = 1;
  let count = 1;
  while (rightPtr < arr.length) {
    if (arr[leftPtr] !== arr[rightPtr]) {
      count++;
      leftPtr = rightPtr;
    }
    rightPtr++;
  }
  return count;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2]));
