// Write a function anyMatch which accepts an array of numbers and a callback. The function should return true if any value in the array returns true when passed to the callback. Otherwise it should return false.
// eg. anyMatch([1,2,3,4], (val) => val > 2) => true
// anyMatch([1,2,3,4], (val) => val > 5) => false
// anyMatch([1,2,3,4], (val) => val > 0) => true

const anyMatch = (
  arr: number[],
  callback: (val: number) => boolean
): boolean => {
  if (!arr.length) return false;
  if (callback(arr[0])) return true;
  return anyMatch(arr.slice(1), callback);
};

console.log(anyMatch([1, 2, 3, 4], (val) => val > 2));
console.log(anyMatch([1, 2, 3, 4], (val) => val > 5));
console.log(anyMatch([1, 2, 3, 4], (val) => val > 0));
