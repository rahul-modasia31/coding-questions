// write a function called searchNum which accepts a sorted array of integers and a number. The function should return the index of the number in the array or -1 if the number is not in the array
// eg: [1,2,3,4,5,6], 4 => 3
// [1,2,3,4,5,6], 6 => 5
// [1,2,3,4,5,6], 11 => -1

const searchNum = (arr: number[], num: number): number => {
  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  while (leftPtr <= rightPtr) {
    const mid = Math.floor((leftPtr + rightPtr) / 2);
    if (arr[mid] === num) return mid;
    if (arr[mid] > num) {
      rightPtr = mid - 1;
    } else {
      leftPtr = mid + 1;
    }
  }
  return -1;
};

const searchNumRecursive = (arr: number[], num: number): number => {
  const searchNum = (leftPtr: number, rightPtr: number): number => {
    if (leftPtr > rightPtr) return -1;
    const mid = Math.floor((leftPtr + rightPtr) / 2);
    if (arr[mid] === num) return mid;
    if (arr[mid] > num) return searchNum(leftPtr, mid - 1);
    return searchNum(mid + 1, rightPtr);
  };

  const leftPtr = 0;
  const rightPtr = arr.length - 1;
  return searchNum(leftPtr, rightPtr);
};

console.log(searchNum([1, 2, 3, 4, 5, 6], 4));
console.log(searchNum([-1, 1, 2, 3, 4, 5, 6], 6));
console.log(searchNum([1, 2, 3, 4, 5, 6], 11));

console.log(searchNumRecursive([1, 2, 3, 4, 5, 6], 4));
console.log(searchNumRecursive([-1, 1, 2, 3, 4, 5, 6], 6));
console.log(searchNumRecursive([1, 2, 3, 4, 5, 6], 11));
