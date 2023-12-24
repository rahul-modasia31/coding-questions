// Write a function fibonaaci which accepts a number and returns the nth number in the fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8,... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
// eg. fibonacci(4) => 3
// fibonacci(10) => 55
// fibonacci(28) => 317811

const fibonacci = (num: number): number => {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(4));
console.log(fibonacci(10));
console.log(fibonacci(28));
