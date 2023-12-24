// Write a function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
// eg. nestedEvenSum({a: 2, b: {c: 4, d: {e: 6}}}) => 12
// nestedEvenSum({a: 2, b: {c: 4, d: {e: 6, f: {g: 8}}}}) => 20
// nestedEvenSum({a: 2, b: {c: 4, d: {e: 6, f: {g: 8, h: {i: 10}}}}}) => 30

type NestedObject = { [key: string]: number | NestedObject };

const nestedEvenSum = (obj: NestedObject): number => {
  let sum = 0;
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object") {
      sum += nestedEvenSum(value);
    } else if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    }
  }
  return sum;
};

console.log(nestedEvenSum({ a: 2, b: { c: 4, d: { e: 6 } } }));
console.log(nestedEvenSum({ a: 2, b: { c: 4, d: { e: 6, f: { g: 8 } } } }));
console.log(
  nestedEvenSum({
    a: 2,
    b: { c: 4, d: { e: 6, f: { g: 8, h: { i: 10 } } } },
  })
);
