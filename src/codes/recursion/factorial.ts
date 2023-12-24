// Write a function called factorial which accepts a number and returns the factorial of that number.
// eg. factorial(1) => 1
// factorial(2) => 2
// factorial(4) => 24

const factorial = (num: number): number => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
