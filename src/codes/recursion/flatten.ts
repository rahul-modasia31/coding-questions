// write a function called flatten which accepts an array of arrays and returns a new array with all values flattened
// eg. flatten([1,2,3,[4,5]]) => [1,2,3,4,5]
// flatten([1,[2,[3,4],[[5]]]]) => [1,2,3,4,5]

type NestedArray = Array<number | NestedArray>;

const flatten = (arr: NestedArray): number[] => {
  if (!arr.length) return [];
  if (Array.isArray(arr[0])) {
    return [...flatten(arr[0]), ...flatten(arr.slice(1))];
  }
  return [arr[0], ...flatten(arr.slice(1))];
};

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
