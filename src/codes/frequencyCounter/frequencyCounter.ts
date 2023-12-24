// Write a js function that takes two arrays and returns true if square of each element in first array is present in second array.
// eg: [1,2,3,4] and [1,4,9,16] => true
// [1,2,3,4] and [1,4,9] => false
// [1,2,1] and [4,4,1] => false

type ArrayData = number[];

const getFrequency = (arr: ArrayData): Record<number, number> => {
  const frequency: Record<number, number> = {};
  for (const val of arr) {
    frequency[val] = (frequency[val] ?? 0) + 1;
  }
  return frequency;
};

const checkArrayIsSame = (arr1: ArrayData, arr2: ArrayData): boolean => {
  if (arr1.length !== arr2.length) return false;
  const arr1Frequency = getFrequency(arr1);
  const arr2Frequency = getFrequency(arr2);

  for (const key in arr1Frequency) {
    const squareValue = (+key) ** 2;
    if (!(squareValue in arr2Frequency)) return false;
    if (arr2Frequency[squareValue] !== arr1Frequency[key]) return false;
  }
  return true;
};

console.log(checkArrayIsSame([1, 2, 3, 4], [1, 4, 9, 16]));
console.log(checkArrayIsSame([1, 2, 3, 4], [1, 4, 9]));
console.log(checkArrayIsSame([1, 2, 1], [4, 4, 1]));

export {};
